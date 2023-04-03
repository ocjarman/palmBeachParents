import db from "../db";
import bcrypt from "bcrypt";
import jwt, { JwtPayload, Secret } from "jsonwebtoken";
import {
  InferAttributes,
  InferCreationAttributes,
  Model,
  STRING, UUID, UUIDV4, BOOLEAN, DATE, AbstractDataType, VIRTUAL, ENUM, DATEONLY
} from "sequelize";
import { EventAttributes } from "./Event";
import { AddressAttributes } from "./Address";
import { FavoriteAttributes } from "./Favorite";

interface ResponseError extends Error {
  status?: number;
}

const JWT = process.env.JWT;

export interface UserAttributes
  extends Model<
    InferAttributes<UserAttributes>,
    InferCreationAttributes<UserAttributes>
  > {
  id?: string;
  username: string;
  password: string;
  firstName?: string;
  lastName?: string;
  fullName?: AbstractDataType;
  accountType?: string;
  phoneNum: string;
  email: string;
  birthday: Date | null;
  imageUrl: string | null;
  isAdmin?: boolean;
  companyName?: string | null;
  events?: [];
  addressId?: number | null;
  favorites?: []
  addEvent(event: EventAttributes): unknown;
  setAddress(address: AddressAttributes): unknown;
  addFavorite(favorite: FavoriteAttributes): unknown;
}

const User = db.define<UserAttributes>("user", {
  id: {
    type: UUID,
    primaryKey: true,
    defaultValue: UUIDV4,
  },
  username: {
    type: STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
    unique: true,
    set(usernameInput: string) {
      this.setDataValue("username", usernameInput.toLowerCase());
    },
    get() {
      const username: string = this.getDataValue("username");
      const usernameArr = username.split("");
      usernameArr[0] = usernameArr[0].toUpperCase();
      return usernameArr.join("");
    },
  },
  password: {
    type: STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  firstName: {
    type: STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  lastName: {
    type: STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  fullName: {
    type: VIRTUAL,
    validate: {
      notEmpty: true,
    },
    get(): string {
      return `${this.getDataValue("firstName")} ${this.getDataValue(
        "lastName"
      )}`;
    },
  },
  accountType: {
    type: ENUM,
    values: ["admin", "user", "organization"],
    allowNull: true,
    defaultValue: "user",
    validate: {
      notEmpty: true,
    },
  },
  phoneNum: {
    type: STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  email: {
    type: STRING,
    allowNull: false,
    unique: true,
    validate: {
      notEmpty: true,
      isEmail: true,
    },
  },
  birthday: {
    type: DATEONLY,
    allowNull: true,
    validate: {
      notEmpty: true,
    },
  },
  imageUrl: {
    type: STRING,
    allowNull: true,
    defaultValue: "/static/person.png",
  },
  isAdmin: {
    type: BOOLEAN,
    allowNull: true,
    defaultValue: false,
  },
  companyName: {
    type: STRING,
    allowNull: true,
  }
});

User.addHook("beforeSave", async (user: UserAttributes) => {
  if (user.changed("password")) {
    user.password = await bcrypt.hash(user.password, 5);
  }
});
// eslint-disable-next-line @typescript-eslint/no-explicit-any
(User as any).findByToken = async function (token: string) {
  try {
    const { id } = jwt.verify(token, process.env.JWT as Secret) as JwtPayload;
    const user = await this.findByPk(id);
    if (user) {
      return user;
    }
    throw "user not found";
  } catch (ex) {
    const error = new Error("bad credentials") as ResponseError;
    error.status = 401;
    throw error;
  }
};

User.prototype.generateToken = function () {
  return jwt.sign({ id: this.id }, JWT as Secret);
};

interface AuthUser {
  username: string;
  password: string;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
(User as any).authenticate = async function ({ username, password }: AuthUser) {
  // find the user who client wnats to login as
  const user = await this.findOne({
    where: {
      username,
    },
  });
  // check password against ours
  if (user && (await bcrypt.compare(password, user.password))) {
    // if they match, give them JWT
    // create obj with id in it, and encrypt it so later on we know who it is
    return jwt.sign({ id: user.id }, JWT as Secret);
  }
  // otherwise, throw error
  const error = new Error("bad credentials") as ResponseError;
  error.status = 401;
  throw error;
};

export default User;
