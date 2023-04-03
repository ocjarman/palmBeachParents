import db from "./db";
import {User, Event, Address, Favorite, RecommendationCategory, SubCategory} from './index'


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

      const [wellness, family, home] = await Promise.all([
        RecommendationCategory.create({ name: "Health & Wellness", image_url: 'static/seedImages/medical.jpeg', url: '/healthAndWellness' }),
        RecommendationCategory.create({ name: "Kids & Family", image_url: 'static/seedImages/family_friendly.jpeg', url: '/kidsAndFamily' }),
        RecommendationCategory.create({ name: "Home Life", image_url: 'static/seedImages/home_life.jpeg', url: '/homeLife' }),
        ]);

      const [childcare, activities, health, baby, party, safety, travel] = await Promise.all([
        SubCategory.create({ name: "Childcare, Education, Camps", image_url: 'static/seedImages/childcare.jpeg' }),
        SubCategory.create({ name: "Classes & Activities", image_url: 'static/seedImages/baby_classes.jpeg' }),
        SubCategory.create({ name: "Physical & Mental Health", image_url: 'static/seedImages/medical.jpeg' }),
        SubCategory.create({ name: "Kid & Baby Needs", image_url: 'static/seedImages/kid_baby.jpeg' }),
        SubCategory.create({ name: "Party Resources", image_url: 'static/seedImages/party.jpeg' }),
        SubCategory.create({ name: "Safety", image_url: 'static/seedImages/safe.jpeg' }),
        SubCategory.create({ name: "Travel", image_url: 'static/seedImages/baby_travel.jpeg' }),
        ]);


      console.log('seeded events')

      const [delrayChildrensGarden] = await Promise.all([
        Favorite.create({name: 'Delray Beach Childrens Garden',
                yelp_id: 'bhjfbjsdbnjds7y3789',
                imageUrl: null,
                yelp_review_count: 55,
                yelp_rating: 5,
                yelp_url: 'https://www.yelp.com/biz/delray-beach-childrens-garden-delray-beach',
                description: null,
                display_phone: '(561) 463-2528',
                distance: 8000,
                is_closed: false})
      ])


      console.log('seeded favorites')


      console.log('starting associations')

      olivia.addEvent(savorTheAve)
      bob.addEvent(savorTheAve)
      shane.addEvent(savorTheAve)
      olivia.addEvent(artAndJazz)
      

      // 'user_favorites' table. User belongsToMany Favorite
      olivia.addFavorite(delrayChildrensGarden)
      shane.addFavorite(delrayChildrensGarden)
      bob.addFavorite(delrayChildrensGarden)

   
      olivia.setAddress(address1)
      bob.setAddress(address2)
      savorTheAve.setAddress(address3)
      shane.setAddress(address4)
      delrayChildrensGarden.setAddress(address5)


        // await health.setRecommendationCategory(wellness)
        wellness.addSubCategory(health)
        family.addSubCategory(childcare)
        family.addSubCategory(activities)
        family.addSubCategory(baby)
        family.addSubCategory(party)
        home.addSubCategory(childcare)
        home.addSubCategory(baby)
        home.addSubCategory(safety)
        home.addSubCategory(travel)

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