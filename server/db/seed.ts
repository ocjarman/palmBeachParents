import db from "./db";
import {User, Event} from './index'

const seed = async () => {
    console.log('STARTING SEED')
      await db.sync({ force: true });
    
      console.log('start seeded users')

      const [olivia, shane, bob] = await Promise.all([
        User.create({ username: "olivia", password: "123", email: 'ocjarman@gmail.com', firstName: 'olivia', lastName: 'jarman', accountType: 'admin', phoneNum: '561-674-2116', address: '151 SE 3rd Ave, #407, Delray Beach, FL, 33433', isAdmin: true, birthday: new Date('1992-02-16')}),
        User.create({ username: "shane", password: "123", email: 'sjarman@gmail.com', firstName: 'shane', lastName: 'jarman', accountType: 'user', phoneNum: '561-312-6281', address: '151 SE 3rd Ave, #407, Delray Beach, FL, 33433', isAdmin: false, birthday: new Date()}),
        User.create({ username: "bob", password: "123", email: 'dda@gmail.com', firstName: 'bob', lastName: 'jarman', accountType: 'organization', phoneNum: '561-312-6281', address: '151 SE 3rd Ave, #407, Delray Beach, FL, 33433', isAdmin: false, birthday: new Date(), companyName: 'Delray Downtown Authority' }),
      ]);
      console.log('seeded users')

      const [savorTheAve, artAndJazz, event3, event4, event5, event6, event7, event8] = await Promise.all([
        Event.create({ name: "Savor the Avenue" , address: 'Atlantic Avenue, Delray Beach, FL', date: new Date(), time: '5:30PM - 9PM', hostName: null, hostPhone: '561-243-1077', hostEmail: 'dda@downtowndelraybeach.com', price: 15000, recurring: false , description: 'gdfhjgkhdf gjkhdfkjg hdfjkghdfkj ghdfgjkd fhgjkdfhgjkdfh gkjdfh', webUrl: 'https://www.google.com'}),
        Event.create({ name: "Art and Jazz on the Avenue" , address: 'Atlantic Avenue, Delray Beach, FL', date: new Date(), time: '5:30PM - 9PM', hostName: null, hostPhone: '561-243-1077', hostEmail: 'dda@downtowndelraybeach.com', price: null, recurring: false, description: 'gdfhjgkhdf gjkhdfkjg hdfjkghdfkj ghdfgjkd fhgjkdfhgjkdfh gkjdfh', webUrl: 'https://www.google.com'}),
        Event.create({ name: "Event 3" , address: 'Atlantic Avenue, Delray Beach, FL', date: new Date(), time: '5:30PM - 9PM', hostName: null, hostPhone: '561-243-1077', hostEmail: 'dda@downtowndelraybeach.com', price: null, recurring: false, description: 'gdfhjgkhdf gjkhdfkjg hdfjkghdfkj ghdfgjkd fhgjkdfhgjkdfh gkjdfh', webUrl: 'https://www.google.com'}),
        Event.create({ name: "Event 4" , address: 'Boca Raton, FL', date: new Date(), time: '5:30PM - 9PM', hostName: null, hostPhone: '561-243-1077', hostEmail: 'dda@downtowndelraybeach.com', price: null, recurring: false, description: 'gdfhjgkhdf gjkhdfkjg hdfjkghdfkj ghdfgjkd fhgjkdfhgjkdfh gkjdfh', webUrl: 'https://www.google.com'}),
        Event.create({ name: "Event 5" , address: 'Boynton Beach, FL', date: new Date(), time: '1:30PM - 3PM', hostName: null, hostPhone: '561-243-1077', hostEmail: 'dda@downtowndelraybeach.com', price: null, recurring: false, description: 'gdfhjgkhdf gjkhdfkjg hdfjkghdfkj ghdfgjkd fhgjkdfhgjkdfh gkjdfh', webUrl: 'https://www.google.com'}),
        Event.create({ name: "Event 6" , address: 'Deerfield Beach, FL', date: new Date(), time: '3:30PM - 4PM', hostName: null, hostPhone: '561-243-1077', hostEmail: 'dda@downtowndelraybeach.com', price: null, recurring: false, description: 'gdfhjgkhdf gjkhdfkjg hdfjkghdfkj ghdfgjkd fhgjkdfhgjkdfh gkjdfh', webUrl: 'https://www.google.com'}),
        Event.create({ name: "Event 7" , address: 'Daytona Beach, FL', date: new Date(), time: '11:30AM - 2PM', hostName: null, hostPhone: '561-243-1077', hostEmail: 'dda@downtowndelraybeach.com', price: null, recurring: false, description: 'gdfhjgkhdf gjkhdfkjg hdfjkghdfkj ghdfgjkd fhgjkdfhgjkdfh gkjdfh', webUrl: 'https://www.google.com'}),
        Event.create({ name: "Event 8" , address: 'Marathon, FL', date: new Date(), time: '10:00PM - 12PM', hostName: null, hostPhone: '561-243-1077', hostEmail: 'dda@downtowndelraybeach.com', price: null, recurring: true, description: 'gdfhjgkhdf gjkhdfkjg hdfjkghdfkj ghdfgjkd fhgjkdfhgjkdfh gkjdfh', webUrl: 'https://www.google.com'}),
      ]);
      console.log('seeded events')
      console.log('starting associations')

      olivia.addEvent(savorTheAve)
      bob.addEvent(savorTheAve)
      shane.addEvent(savorTheAve)
      olivia.addEvent(artAndJazz)
      // test purposes, will mostly be using 'addEvent' for users
      artAndJazz.addUser(olivia)
      artAndJazz.addUser(shane)
      artAndJazz.addUser(bob)

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
        
      };
    
};

seed();