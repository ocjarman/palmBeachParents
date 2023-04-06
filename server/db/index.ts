import db from './db';
import User from './models/User';
import Event from './models/Event';
import Address from './models/Address';
import Favorite from './models/Favorite';
import RecommendationCategory from './models/RecommendationCategory';
import SubCategory from './models/SubCategory';
import Review from './models/Review'

// make associations here
User.belongsToMany(Event, {through: 'users_events'} )
User.hasMany(Favorite)
User.hasMany(Review)


RecommendationCategory.hasMany(SubCategory)

//need to create topic model
// instead of seeding subcategories, they should come from a yelp api request
//that includes those keywords, and then PBP users can add their own experiences reviews on those places/businesses

User.hasOne(Address)
Event.hasOne(Address)
Favorite.hasOne(Address)

export { User, Event, Address, db, Favorite, RecommendationCategory, SubCategory };
