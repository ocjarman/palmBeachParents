import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../store';
import EventCard from './EventCard';
import { EventType } from '../../../utils/interfaces';

const Events = () => {
  const events = useSelector((state: RootState) => state.events.events)
    return (
    <div>       
      <h1>Events</h1>
       {events.map((event: EventType) => (
                <EventCard key={event.id} name={event.name} address={event.address} date={event.date} time={event.time} description={event.description} url={event.url} hostName={event.hostName} hostNumber={event.hostNumber} hostEmail={event.hostEmail} cost={event.cost} imageUrl={event.imageUrl} recurring={event.recurring} users={event.users}/>
          ))}
    </div>
    );
};

export default Events;