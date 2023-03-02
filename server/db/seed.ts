import db from "./db";
import User from "./models/User";
import Event from "./models/Event";

const seed = async () => {
    console.log('STARTING SEED')
      await db.sync({ force: true });
    
      const [olivia, shane] = await Promise.all([
        User.create({ username: "olivia", password: "123", email: 'ocjarman@gmail.com', firstName: 'olivia', lastName: 'jarman', phoneNum: '561-674-2116', address: '151 SE 3rd Ave, #407, Delray Beach, FL, 33433', isAdmin: true, birthday: new Date()  }),
        User.create({ username: "shane", password: "123", email: 'sjarman@gmail.com', firstName: 'shane', lastName: 'jarman', phoneNum: '561-312-6281', address: '151 SE 3rd Ave, #407, Delray Beach, FL, 33433', isAdmin: false, birthday: new Date()  }),
      ]);

      const [savorTheAve, artAndJazz] = await Promise.all([
        Event.create({ eventName: "Savor the Avenue" , eventAddress: 'Atlantic Avenue, Delray Beach, FL', eventDate: new Date(), eventTime: '5:30PM - 9PM', contactName: null, contactNumber: '561-243-1077', contactEmail: 'dda@downtowndelraybeach.com', cost: 15000, imageUrl: null, recurring: false }),
        Event.create({ eventName: "Art and Jazz on the Avenue" , eventAddress: 'Atlantic Avenue, Delray Beach, FL', eventDate: new Date(), eventTime: '5:30PM - 9PM', contactName: null, contactNumber: '561-243-1077', contactEmail: 'dda@downtowndelraybeach.com', cost: null, imageUrl: null, recurring: false}),
      ]);

      console.log('ENDING SEED')
      return {
        users: {
          olivia,
          shane
        },
        events: {
          savorTheAve, artAndJazz
        }
      };
    
};

seed();