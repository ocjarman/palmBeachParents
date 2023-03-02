import db from "../db";
import Sequelize from "sequelize";
import bcrypt from "bcrypt";
import jwt, { JwtPayload, Secret } from "jsonwebtoken";
import {
  CreationOptional,
  InferAttributes,
  InferCreationAttributes,
  Model,
  STRING, UUID, UUIDV4
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
  email: CreationOptional<string>;
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
  email: {
    type: STRING,
  },
});

User.addHook("beforeSave", async (user: UserModel) => {
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
