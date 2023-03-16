import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import recommendationsSlice from '../../../store/recommendationsSlice';
import { RecType } from '../../../utils/interfaces';
import { Rating } from '@mui/material';

export default function RecCard(rec: RecType) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="recommendation image"
        height="140"
        src={`${rec.image_url}`}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {rec.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          INFO HERE!
        </Typography>
        <Rating name="read-only" value={rec.rating} readOnly />
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small" href={`${rec.url}`}>Learn More</Button>
      </CardActions>
    </Card>
  );
}