import React, { useEffect, useState } from 'react';
import { Container } from '@mui/system';
import Typography from '../../CustomMUI/Typography';
import ThingToDoCard from './ThingToDoCard';
import { useSelector } from 'react-redux';
import { RootState } from '../../../store';
import { FavType, RecType } from '../../../utils/interfaces';
import SearchThingsToDo from './SearchThingsToDo';

const ThingsToDo = () => {
  const thingsToDo = useSelector((state: RootState) => state.thingsToDo.thingsToDo)
  const favorites = useSelector((state: RootState) => state.favorites.favorites)
  const [favoriteYelpIds, setFavoriteYelpIds] = useState<any>([])
  
  const getFavoriteIds = () => {
    let favArray: string[] = []
    if (favorites) {
      const favIds = favorites.forEach((favorite: FavType) => {
        favArray.push(favorite.yelp_id)
      })
      setFavoriteYelpIds(favArray)
    } else {
      return
    }
  }

  const calcIsFavorite = (rec: RecType) => {
    return favoriteYelpIds.includes(rec.id)
  }

  useEffect(() => {
    getFavoriteIds()
  }, [favorites])

  if (!thingsToDo) return <p>loading!!!</p>
  return (
  <Container sx={{display: 'flex', flexDirection: 'column', textAlign: 'center'}} maxWidth={false}>
    <Typography sx={{ placeSelf: "center", margin: '3%' }} variant={"h2"}>Things To Do</Typography>
    <SearchThingsToDo/>
    <Container sx={{display: 'flex', flexWrap: 'wrap', gap: 3, alignContent: 'center', justifyContent: 'center'}} maxWidth={false}>
     {thingsToDo?.map((rec: RecType) => (
          <ThingToDoCard key={rec.id} isFavorite={calcIsFavorite(rec)} id={rec.id} name={rec.name} image_url={rec.image_url} is_closed={rec.is_closed} location={rec.location} review_count={rec.review_count} rating={rec.rating} url={rec.url} display_phone={rec.display_phone} distance={rec.distance} categories={rec.categories} />
      ))}
    </Container>
  </Container>
  );
};

export default ThingsToDo;