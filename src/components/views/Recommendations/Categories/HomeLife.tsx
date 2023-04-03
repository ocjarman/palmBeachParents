import React from 'react';
import { Container } from '@mui/system';
import Typography from '../../../CustomMUI/Typography';


const HomeLife = () => {
  return (
  <Container sx={{display: 'flex', flexDirection: 'column', textAlign: 'center'}} maxWidth={false}>
    <Typography sx={{ placeSelf: "center", margin: '3%' }} variant={"h3"}>Home Life</Typography>
    <Container sx={{display: 'flex', flexWrap: 'wrap', gap: 3, alignContent: 'center', justifyContent: 'center'}} maxWidth={false}>
     {/* {recCategories?.map((recCategory: RecCategoryType) => (
          <RecCard key={recCategory.id} name={recCategory.name} image_url={recCategory.image_url}/>
      ))} */}
    </Container>
  </Container>
  );
};

export default HomeLife;