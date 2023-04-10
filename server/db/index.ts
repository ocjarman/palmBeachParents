import db from './db';
import User from './models/User';
import Event from './models/Event';
import Address from './models/Address';
import Favorite from './models/Favorite';
import RecommendationCategory from './models/RecommendationCategory';
import SubCategory from './models/SubCategory';
import Review from './models/Review'
import Topic from './models/Topic';

// make associations here
User.belongsToMany(Event, {through: 'users_events'} )
User.hasMany(Favorite)
User.hasMany(Review)

RecommendationCategory.hasMany(SubCategory)
SubCategory.hasMany(Topic)
Topic.hasMany(Review)

User.hasOne(Address)
Event.hasOne(Address)
Favorite.hasOne(Address)

export { User, Event, Address, db, Favorite, RecommendationCategory, SubCategory, Topic, Review };
