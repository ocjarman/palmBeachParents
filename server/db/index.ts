import db from './db';
import User from './models/User';
import Event from './models/Event';
import Address from './models/Address';


// make associations here
User.hasMany(Event)
Event.belongsToMany(User, {through: 'event_users'})

Address.hasOne(User)
// User.hasOne(Address)

export { User, Event, Address, db };
