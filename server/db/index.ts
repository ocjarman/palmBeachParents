import db from './db';
import User from './models/User';
import Event from './models/Event';
import Address from './models/Address';
import Favorite from './models/Favorite';


// make associations here
User.belongsToMany(Event, {through: 'users_events'} )
User.belongsToMany(Favorite, {through: 'user_favorites'})


User.hasOne(Address)
Event.hasOne(Address)
Favorite.hasOne(Address)

// Address.belongsTo(User)
// Address.belongsTo(Event)
// Address.belongsTo(Favorite)


export { User, Event, Address, db, Favorite };
