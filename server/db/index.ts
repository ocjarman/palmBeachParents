import db from './db';
import User from './models/User';
import Event from './models/Event';


// make associations here
User.hasMany(Event)
Event.belongsToMany(User, {through: 'event_users'})

export { User, Event, db };
