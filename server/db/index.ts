import db from './db';
import User from './models/User';
import Event from './models/Event';
import Address from './models/Address';


// make associations here
User.belongsToMany(Event, {through: 'users_events'} )
Event.belongsToMany(User, {through: 'event_users'})

Address.hasOne(User)
Address.hasOne(Event)
// User.hasOne(Address)
// Event.hasOne(Address)


export { User, Event, Address, db };
