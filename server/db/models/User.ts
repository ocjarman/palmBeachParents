import db from "../db";
import Sequelize from "sequelize";
import bcrypt from "bcrypt";
import jwt, { JwtPayload, Secret } from "jsonwebtoken";
import {
  CreationOptional,
  InferAttributes,
  InferCreationAttributes,
  Model,
  STRING, UUID, UUIDV4, BOOLEAN, DATE, AbstractDataType, VIRTUAL
} from "sequelize";

interface ResponseError extends Error {
  status?: number;
}

const JWT = process.env.JWT;

export interface UserModel
  extends Model<
    InferAttributes<UserModel>,
    InferCreationAttributes<UserModel>
  > {
  id: CreationOptional<string>;
  username: string;
  password: string;
  firstName: string;
  lastName: string;
  fullName?: AbstractDataType;
  phoneNum: string;
  email: string;
  birthday: Date | null;
  address: string;
  avatarUrl: string | null;
  isAdmin: boolean;
}

const User = db.define<UserModel>("user", {
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
    type: DATE,
    allowNull: true,
    validate: {
      notEmpty: true,
      isDate: true,
    },
  },
  address: {
    type: STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  avatarUrl: {
    type: STRING,
    allowNull: true,
    defaultValue: "/public/logo.svg",
  },
  isAdmin: {
    type: BOOLEAN,
    defaultValue: false,
  },
});

User.addHook("beforeSave", async (user: UserModel) => {
  if (user.changed("password")) {
    user.password = await bcrypt.hash(user.password, 5);
  }
});

User.prototype.findByToken = async function (token: string) {
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


User.prototype.authenticate = async function (userAuth: {
  username: string;
  password: string;
}) {
  const { username, password } = userAuth;
  const user = await User.findOne({
    where: {
      username,
    },
  });
  if (user && (await bcrypt.compare(password, user.password))) {
    return jwt.sign({ id: user.id }, process.env.JWT!);
  }
  const error = new Error("bad credentials");
  error.message = "401";
  throw error;
};
export default User;
