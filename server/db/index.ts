import db from './db';
import User from './models/User';
import Event from './models/Event';
import Organization from './models/Organization';


// make associations here

// A user should be able to 'join' events
// An admin user should be able to create events
// User has many Events

// if a user is 'attending' an event, this association will be made
User.belongsToMany(Event, {through: 'user_events'})
// Event.belongsToMany(User, {through: 'user_events'})

// an org has one main contact
// Organization.belongsTo(User)

// an org can have many users
// Organization.hasMany(User)



export { User, Event, Organization, db };
