import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { RecCategoryType } from '../../../utils/interfaces';

export default function RecCard(recCategory: RecCategoryType) {
  const singleRecPageUrl = `${recCategory.url}`;

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="recommendation image"
        height="140"
        src={`${recCategory.image_url}`}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {recCategory.name}
        </Typography>
      </CardContent>
      <Button size="small" href={singleRecPageUrl}
>Learn More</Button>
    </Card>
  );
}