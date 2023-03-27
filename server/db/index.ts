import db from './db';
import User from './models/User';
import Event from './models/Event';
import Address from './models/Address';
import Favorite from './models/Favorite';
// import UserFavorites from './models/UserFavorites';

// make associations here
User.belongsToMany(Event, {through: 'users_events'} )
User.hasMany(Favorite)


User.hasOne(Address)
Event.hasOne(Address)
Favorite.hasOne(Address)

export { User, Event, Address, db, Favorite };
