import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from "../../CustomMUI/Button";
import Typography from "../../CustomMUI/Typography";
import { EventType } from '../../../utils/interfaces';

export default function EventCard(event: EventType) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="descriptor of image"
        height="140"
        src={`${event.image_url}`}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {event.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {event.description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <a href={`${event.event_site_url}`}>Learn More</a>
        <a href={`${event.tickets_url}`}>Get Tickets</a>
      </CardActions>
    </Card>
  );
}