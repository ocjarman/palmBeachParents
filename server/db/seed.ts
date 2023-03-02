import db from "./db";
import User from "./models/User";
import Event from "./models/Event";
import Organization from "./models/Organization";

const seed = async () => {
    console.log('STARTING SEED')
      await db.sync({ force: true });
    
      const [olivia, shane, bob] = await Promise.all([
        User.create({ username: "olivia", password: "123", email: 'ocjarman@gmail.com', firstName: 'olivia', lastName: 'jarman', accountType: 'admin', phoneNum: '561-674-2116', address: '151 SE 3rd Ave, #407, Delray Beach, FL, 33433', isAdmin: true, birthday: new Date() }),
        User.create({ username: "shane", password: "123", email: 'sjarman@gmail.com', firstName: 'shane', lastName: 'jarman', accountType: 'user', phoneNum: '561-312-6281', address: '151 SE 3rd Ave, #407, Delray Beach, FL, 33433', isAdmin: false, birthday: new Date() }),
        User.create({ username: "bob", password: "123", email: 'dda@gmail.com', firstName: 'bob', lastName: 'jarman', accountType: 'user', phoneNum: '561-312-6281', address: '151 SE 3rd Ave, #407, Delray Beach, FL, 33433', isAdmin: false, birthday: new Date() }),
      ]);

      const [savorTheAve, artAndJazz, event3, event4, event5, event6, event7, event8] = await Promise.all([
        Event.create({ eventName: "Savor the Avenue" , eventAddress: 'Atlantic Avenue, Delray Beach, FL', eventDate: new Date(), eventTime: '5:30PM - 9PM', contactName: null, contactNumber: '561-243-1077', contactEmail: 'dda@downtowndelraybeach.com', cost: 15000, imageUrl: null, recurring: false }),
        Event.create({ eventName: "Art and Jazz on the Avenue" , eventAddress: 'Atlantic Avenue, Delray Beach, FL', eventDate: new Date(), eventTime: '5:30PM - 9PM', contactName: null, contactNumber: '561-243-1077', contactEmail: 'dda@downtowndelraybeach.com', cost: null, imageUrl: null, recurring: false}),
        Event.create({ eventName: "Event 3" , eventAddress: 'Atlantic Avenue, Delray Beach, FL', eventDate: new Date(), eventTime: '5:30PM - 9PM', contactName: null, contactNumber: '561-243-1077', contactEmail: 'dda@downtowndelraybeach.com', cost: null, imageUrl: null, recurring: false}),
        Event.create({ eventName: "Event 4" , eventAddress: 'Boca Raton, FL', eventDate: new Date(), eventTime: '5:30PM - 9PM', contactName: null, contactNumber: '561-243-1077', contactEmail: 'dda@downtowndelraybeach.com', cost: null, imageUrl: null, recurring: false}),
        Event.create({ eventName: "Event 5" , eventAddress: 'Boynton Beach, FL', eventDate: new Date(), eventTime: '1:30PM - 3PM', contactName: null, contactNumber: '561-243-1077', contactEmail: 'dda@downtowndelraybeach.com', cost: null, imageUrl: null, recurring: false}),
        Event.create({ eventName: "Event 6" , eventAddress: 'Deerfield Beach, FL', eventDate: new Date(), eventTime: '3:30PM - 4PM', contactName: null, contactNumber: '561-243-1077', contactEmail: 'dda@downtowndelraybeach.com', cost: null, imageUrl: null, recurring: false}),
        Event.create({ eventName: "Event 7" , eventAddress: 'Daytona Beach, FL', eventDate: new Date(), eventTime: '11:30AM - 2PM', contactName: null, contactNumber: '561-243-1077', contactEmail: 'dda@downtowndelraybeach.com', cost: null, imageUrl: null, recurring: false}),
        Event.create({ eventName: "Event 8" , eventAddress: 'Marathon, FL', eventDate: new Date(), eventTime: '10:00PM - 12PM', contactName: null, contactNumber: '561-243-1077', contactEmail: 'dda@downtowndelraybeach.com', cost: null, imageUrl: null, recurring: true}),
      ]);

      const [DDA, oliviaAndShane] = await Promise.all([
        Organization.create({ orgName: "Delray Downtown Authority"}),
        Organization.create({ orgName: "Olivia And Shane Events"}),
      ]);

      // an org can have many users
      // bob.setOrganization(DDA)
      // shane.setOrganization(DDA)
      // olivia.setOrganization(DDA)
      // an org has one main contact
      // DDA.addMainContact(bob)

      // User.hasMany(Event)
      await olivia.addEvent(event5)
      await shane.addEvent(event3)

     console.log('ENDING SEED')
      return {
        users: {
          olivia,
          shane,
          bob
        },
        events: {
          savorTheAve, artAndJazz, event3, event4, event5, event6, event7, event8
        },
        organizations: {
          DDA, oliviaAndShane
        }
      };
    
};

seed();