import React from 'react';
import { Container } from '@mui/system';
import Typography from '../../CustomMUI/Typography';
import RecCard from './RecCard';
import { useSelector } from 'react-redux';
import { RootState } from '../../../store';
import { RecType } from '../../../utils/interfaces';

const Recommendations = () => {
  const recommendations = useSelector((state: RootState) => state.recommendations.recommendations)
  return (
  <Container sx={{display: 'flex', flexDirection: 'column', textAlign: 'center'}} maxWidth={false}>
    <Typography sx={{ placeSelf: "center", margin: '3%' }} variant={"h2"}>Recommendations</Typography>
    <Container sx={{display: 'flex', flexWrap: 'wrap', gap: 3, alignContent: 'center', justifyContent: 'center'}} maxWidth={false}>
     {recommendations?.map((rec: RecType) => (
          <RecCard key={rec.id} name={rec.name} image_url={rec.image_url} is_closed={rec.is_closed} location={rec.location} review_count={rec.review_count} rating={rec.rating} url={rec.url} display_phone={rec.display_phone} distance={rec.distance} categories={rec.categories} />
      ))}
    </Container>
  </Container>
  );
};

export default Recommendations;