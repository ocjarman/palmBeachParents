import React, { useEffect } from 'react';
import { Container } from '@mui/system';
import Typography from '../../../CustomMUI/Typography';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const HealthAndWellness = () => {
  const params = useParams()
  
  console.log(params)
  const getSubcategories = async () => {
    console.log('logging subcategories')
    let response = await axios.get('/api/recommendations/categories/')
    console.log(response.data)
  }
  useEffect(() => {
    getSubcategories()
  }, [])

  return (
  <Container sx={{display: 'flex', flexDirection: 'column', textAlign: 'center'}} maxWidth={false}>
    <Typography sx={{ placeSelf: "center", margin: '3%' }} variant={"h3"}>Health and Wellness</Typography>
    <Container sx={{display: 'flex', flexWrap: 'wrap', gap: 3, alignContent: 'center', justifyContent: 'center'}} maxWidth={false}>
     {/* {recCategories?.map((recCategory: RecCategoryType) => (
          <RecCard key={recCategory.id} name={recCategory.name} image_url={recCategory.image_url}/>
      ))} */}
    </Container>
  </Container>
  );
};

export default HealthAndWellness;