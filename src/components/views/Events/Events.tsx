import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../store';
import EventCard from './EventCard';
import { EventType } from '../../../utils/interfaces';
import { Container } from '@mui/system';
const Events = () => {
  const events = useSelector((state: RootState) => state.events.events)
    return (
    <Container sx={{display: 'flex', flexDirection: 'column', textAlign: 'center'}} maxWidth={false}>
      <h1>Events</h1>
      <Container sx={{display: 'flex', flexWrap: 'wrap', gap: 3, alignContent: 'center', justifyContent: 'center'}} maxWidth={false}>
       {events.map((event: EventType) => (
                <EventCard key={event.id} name={event.name} address={event.address} date={event.date} time={event.time} description={event.description} url={event.url} hostName={event.hostName} hostNumber={event.hostNumber} hostEmail={event.hostEmail} cost={event.cost} imageUrl={event.imageUrl} recurring={event.recurring} users={event.users}/>
          ))}
      </Container>
    </Container>
    );
};

export default Events;