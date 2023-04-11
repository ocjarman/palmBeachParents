import React from 'react';
import { Container } from '@mui/system';
import Typography from '../../CustomMUI/Typography';
import RecCard from './RecCard';
import { useSelector } from 'react-redux';
import { RootState } from '../../../store';
import { RecCategoryType } from '../../../utils/interfaces';

const Recommendations = () => {
  const recCategories = useSelector((state: RootState) => state.recommendations.recCategories)

  if (!recCategories) return <p>loading!!!</p>
  return (
  <Container sx={{display: 'flex', flexDirection: 'column', textAlign: 'center'}} maxWidth={false}>
    <Typography sx={{ placeSelf: "center", margin: '3%' }} variant={"h2"}>Recommendations</Typography>
    <Container sx={{display: 'flex', flexWrap: 'wrap', gap: 3, alignContent: 'center', justifyContent: 'center'}} maxWidth={false}>
     {recCategories?.map((recCategory: RecCategoryType) => (
          <RecCard key={recCategory.id} id={recCategory.id} name={recCategory.name} image_url={recCategory.image_url} url={recCategory.url}/>
      ))}
    </Container>
  </Container>
  );
};

export default Recommendations;