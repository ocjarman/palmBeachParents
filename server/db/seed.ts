import db from "./db";
import User from "./User";

const seed = async () => {
    console.log('STARTING SEED')
      await db.sync({ force: true });
    
      const [olivia, shane] = await Promise.all([
        User.create({ username: "olivia", password: "123", email: 'ocjarman@gmail.com' }),
        User.create({ username: "shane", password: "123", email: 'sjarman@gmail.com' }),
      ]);

      console.log('ENDING SEED')
      return {
        users: {
          olivia,
          shane
        },
      };
    
};

seed();