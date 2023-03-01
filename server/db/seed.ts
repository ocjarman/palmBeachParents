import db from "./db";
import User from "./User";

import dotenv from 'dotenv'
dotenv.config()

const seed = async () => {
    console.log('STARTING SEED')
    console.log("SEED VALUE", process.env.SEED)
    if (process.env.SEED === 'true') {
      await db.sync({ force: true });
    
      const [olivia, lucy, joe, bobby] = await Promise.all([
        User.create({ username: "olivia", password: "123", email: 'ocjarman@gmail.com' }),
        User.create({ username: "lucy", password: "123" }),
        User.create({ username: "joe", password: "123" }),
        User.create({ username: "liv", password: "123" }),
      ]);

      console.log('ENDING SEED')
      return {
        users: {
          olivia,
          lucy,
          joe,
          bobby,
        },
      };
    }
};

seed()