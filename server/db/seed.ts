import db from "./db";
import {User, Event, Address} from './index'

const seed = async () => {
    console.log('STARTING SEED')
      await db.sync({ force: true });
    
      console.log('start seeded users')

      const [olivia, shane, bob] = await Promise.all([
        User.create({ username: "olivia", password: "123", email: 'ocjarman@gmail.com', firstName: 'olivia', lastName: 'jarman', accountType: 'admin', phoneNum: '561-674-2116', isAdmin: true, birthday: new Date('1992-02-16')}),
        User.create({ username: "shane", password: "123", email: 'sjarman@gmail.com', firstName: 'shane', lastName: 'jarman', accountType: 'user', phoneNum: '561-312-6281', isAdmin: false, birthday: new Date()}),
        User.create({ username: "bob", password: "123", email: 'dda@gmail.com', firstName: 'bob', lastName: 'jarman', accountType: 'organization', phoneNum: '561-312-6281', isAdmin: false, birthday: new Date(), companyName: 'Delray Downtown Authority' }),
      ]);


      console.log('seeded users')

      const [address1, address2, address3, address4, address5] = await Promise.all([
        Address.create({ address1: "151 SE 3rd Ave" , address2: 'Apartment 407', city: 'Delray Beach', state: 'FL', zipcode: 33483}),
        Address.create({ address1: "716 Sunset Road" , address2: null, city: 'Boynton Beach', state: 'FL', zipcode: 33435}),
        Address.create({ address1: "709 SW 28th Ave" , address2: null, city: 'Boynton Beach', state: 'FL', zipcode: 33435}),
        Address.create({ address1: "125 cool lane" , address2: null, city: 'Boynton Beach', state: 'FL', zipcode: 33435}),
        Address.create({ address1: "456 loser lane" , address2: null, city: 'Delray Beach', state: 'FL', zipcode: 33435}),
      ]);

      console.log('seeded addresses')

      const [savorTheAve, artAndJazz, event3, event4, event5, event6, event7, event8] = await Promise.all([
        Event.create({ name: "Savor the Avenue" , date: new Date(), time: '5:30PM - 9PM', hostName: null, hostPhone: '561-243-1077', hostEmail: 'dda@downtowndelraybeach.com', price: 15000, recurring: false , description: 'gdfhjgkhdf gjkhdfkjg hdfjkghdfkj ghdfgjkd fhgjkdfhgjkdfh gkjdfh', webUrl: 'https://www.google.com'}),
        Event.create({ name: "Art and Jazz on the Avenue" , date: new Date(), time: '5:30PM - 9PM', hostName: null, hostPhone: '561-243-1077', hostEmail: 'dda@downtowndelraybeach.com', price: null, recurring: false, description: 'gdfhjgkhdf gjkhdfkjg hdfjkghdfkj ghdfgjkd fhgjkdfhgjkdfh gkjdfh', webUrl: 'https://www.google.com'}),
        Event.create({ name: "Event 3" , date: new Date(), time: '5:30PM - 9PM', hostName: null, hostPhone: '561-243-1077', hostEmail: 'dda@downtowndelraybeach.com', price: null, recurring: false, description: 'gdfhjgkhdf gjkhdfkjg hdfjkghdfkj ghdfgjkd fhgjkdfhgjkdfh gkjdfh', webUrl: 'https://www.google.com'}),
        Event.create({ name: "Event 4" ,  date: new Date(), time: '5:30PM - 9PM', hostName: null, hostPhone: '561-243-1077', hostEmail: 'dda@downtowndelraybeach.com', price: null, recurring: false, description: 'gdfhjgkhdf gjkhdfkjg hdfjkghdfkj ghdfgjkd fhgjkdfhgjkdfh gkjdfh', webUrl: 'https://www.google.com'}),
        Event.create({ name: "Event 5" ,  date: new Date(), time: '1:30PM - 3PM', hostName: null, hostPhone: '561-243-1077', hostEmail: 'dda@downtowndelraybeach.com', price: null, recurring: false, description: 'gdfhjgkhdf gjkhdfkjg hdfjkghdfkj ghdfgjkd fhgjkdfhgjkdfh gkjdfh', webUrl: 'https://www.google.com'}),
        Event.create({ name: "Event 6" , date: new Date(), time: '3:30PM - 4PM', hostName: null, hostPhone: '561-243-1077', hostEmail: 'dda@downtowndelraybeach.com', price: null, recurring: false, description: 'gdfhjgkhdf gjkhdfkjg hdfjkghdfkj ghdfgjkd fhgjkdfhgjkdfh gkjdfh', webUrl: 'https://www.google.com'}),
        Event.create({ name: "Event 7" , date: new Date(), time: '11:30AM - 2PM', hostName: null, hostPhone: '561-243-1077', hostEmail: 'dda@downtowndelraybeach.com', price: null, recurring: false, description: 'gdfhjgkhdf gjkhdfkjg hdfjkghdfkj ghdfgjkd fhgjkdfhgjkdfh gkjdfh', webUrl: 'https://www.google.com'}),
        Event.create({ name: "Event 8" ,  date: new Date(), time: '10:00PM - 12PM', hostName: null, hostPhone: '561-243-1077', hostEmail: 'dda@downtowndelraybeach.com', price: null, recurring: true, description: 'gdfhjgkhdf gjkhdfkjg hdfjkghdfkj ghdfgjkd fhgjkdfhgjkdfh gkjdfh', webUrl: 'https://www.google.com'}),
      ]);

      console.log('seeded events')
      console.log('starting associations')

      // the below 2 chunks are making the same tables just organized differently. 
      // which one makes more sense to keep?
      // ('user_events' table keeps track of events for each user)
      olivia.addEvent(savorTheAve)
      bob.addEvent(savorTheAve)
      shane.addEvent(savorTheAve)
      olivia.addEvent(artAndJazz)
      
      // ('event_users' table keeps track of users for each event)
      artAndJazz.addUser(olivia)
      artAndJazz.addUser(shane)
      artAndJazz.addUser(bob)

      address1.setUser(olivia)     
      address2.setUser(shane)     
      address3.setUser(bob)     
      address4.setEvent(savorTheAve)     
      address5.setEvent(artAndJazz)     


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