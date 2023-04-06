import React, { useEffect, useState } from 'react';
import { Container } from '@mui/system';
import Typography from '../../../CustomMUI/Typography';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { RecCategoryType, SubcategoryType } from '../../../../utils/interfaces';
import SubcategoryCard from './SubcategoryCard';

const SingleRecommendation = () => {
  const params = useParams()
  const [selectedCategory, setSelectedCategory] = useState<RecCategoryType | null>(null)
  const [subcategories, setSubcategories] = useState<SubcategoryType[]>([])
  const [loading, setLoading] = useState(false)

  const getSubcategories = async () => {
    setLoading(true)
    let response = await axios.get(`/api/recommendations/${params.id}`)
    setSelectedCategory(response.data[0])
    setSubcategories(response.data[0].subCategories)
    setLoading(false)
  }
  useEffect(() => {
    getSubcategories()
  }, [])


  if (loading) return <p>loading...</p>
  return (
  <Container sx={{display: 'flex', flexDirection: 'column', textAlign: 'center'}} maxWidth={false}>
    <Typography sx={{ placeSelf: "center", margin: '3%' }} variant={"h3"}>{selectedCategory && selectedCategory?.name}</Typography>
    <Container sx={{display: 'flex', flexWrap: 'wrap', gap: 3, alignContent: 'center', justifyContent: 'center'}} maxWidth={false}>
     {subcategories?.map((subcategory: SubcategoryType) => (
          <SubcategoryCard key={subcategory.id} name={subcategory.name} image_url={subcategory.image_url}/>
      ))}
    </Container>
  </Container>
  );
};

export default SingleRecommendation;