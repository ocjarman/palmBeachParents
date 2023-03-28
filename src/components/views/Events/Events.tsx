import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../store';
import EventCard from './EventCard';
import { EventType } from '../../../utils/interfaces';
import { Container } from '@mui/system';
import Typography from '../../CustomMUI/Typography';

const Events = () => {
  const events = useSelector((state: RootState) => state.events.events)
    return (
    <Container sx={{display: 'flex', flexDirection: 'column', textAlign: 'center'}} maxWidth={false}>
      <Typography sx={{ placeSelf: "center", margin: '3%' }} variant={"h2"}>Events</Typography>
      <Container sx={{display: 'flex', flexWrap: 'wrap', gap: 3, alignContent: 'center', justifyContent: 'center'}} maxWidth={false}>
       {events.map((event: EventType) => (
            <EventCard key={event.id} name={event.name} category={event.category} cost={event.cost} description={event.description} event_site_url={event.event_site_url} image_url={event.image_url} is_free={event.is_free} location={event.location} tickets_url={event.tickets_url} time_start={event.time_start} time_end={event.time_end} />
            // <EventCard key={event.id} name={event.name} address={event.address} date={event.date} time={event.time} description={event.description} webUrl={event.webUrl} hostName={event.hostName} hostPhone={event.hostPhone} hostEmail={event.hostEmail} price={event.price} imageUrl={event.imageUrl} recurring={event.recurring} users={event.users} category={event.category} age={event.age}/>
        ))}
      </Container>
    </Container>
    );
};

export default Events;