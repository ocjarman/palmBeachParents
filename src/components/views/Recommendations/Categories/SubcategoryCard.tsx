import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { SubcategoryType } from '../../../../utils/interfaces';
import { useEffect } from 'react';

export default function SubcategoryCard(subcategory: SubcategoryType) {
//   const singleRecPageUrl = `/recommendations/${subcategory.id}`;
useEffect(() => {
}, [])

return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="recommendation image"
        height="140"
        src={`${subcategory.image_url}`}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {subcategory.name}
        </Typography>
      </CardContent>
      <Button size="small" >Learn More</Button>
    </Card>
  );
}