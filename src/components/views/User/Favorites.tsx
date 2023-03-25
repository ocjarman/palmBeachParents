import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../store";
import { Container } from "@mui/system";
import Typography from "../../CustomMUI/Typography";
import ThingToDoCard from "../ThingsToDo/ThingToDoCard";
import { FavType } from "../../../utils/interfaces";
import FavCard from "./FavCard";
const Favorites = () => {
  const favorites = useSelector(
    (state: RootState) => state.favorites.favorites
  );
  return (
    <Container
      sx={{ display: "flex", flexDirection: "column", textAlign: "center" }}
      maxWidth={false}
    >
      <Typography sx={{ placeSelf: "center", margin: "3%" }} variant={"h2"}>
        Favorites
      </Typography>

      <Container
        sx={{
          display: "flex",
          flexWrap: "wrap",
          gap: 3,
          alignContent: "center",
          justifyContent: "center",
        }}
        maxWidth={false}
      >
        {favorites?.map((fav: FavType) => (
          <FavCard
            key={fav.id}
            yelp_id={fav.yelp_id}
            name={fav.name}
            imageUrl={fav.imageUrl}
            is_closed={fav.is_closed}
            yelp_review_count={fav.yelp_review_count}
            yelp_rating={Number(fav.yelp_rating)}
            yelp_url={fav.yelp_url}
            display_phone={fav.display_phone}
            distance={fav.distance}
            categories={fav.categories}
            description={fav.description}
            address={fav.address}
          />
        ))}
      </Container>
    </Container>
  );
};

export default Favorites;
