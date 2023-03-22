import db from './db';
import User from './models/User';
import Event from './models/Event';
import Address from './models/Address';


// make associations here
User.belongsToMany(Event, {through: 'users_events'} )

User.hasOne(Address)
Event.hasOne(Address)


export { User, Event, Address, db };
