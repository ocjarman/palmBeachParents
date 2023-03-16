import { Container, Input, InputLabel, MenuItem, Select } from "@mui/material";
import React, { BaseSyntheticEvent, useState } from "react";
import FormControl from "@mui/material/FormControl";

const RecFilter = () => {
  const [searchData, setSearchData] = useState<ParamType>({
    term: null,
    location: null,
    radius: null,
    sort_by: null,
    limit: null,
  });

  interface ParamType {
    term: string | null;
    location: string | null;
    radius: number | null;
    sort_by: string | null;
    limit: number | null;
  }

  const handleSearchParams = (e: BaseSyntheticEvent) => {
    const target = e.target;
    const value = target.value;
    const name = target.name;
    setSearchData({ ...searchData, [name]: value });
  };

  const findRecommendations = () => {
    console.log("looking!");
    console.log(searchData);
  };

  const locations = [
    "Boca Raton",
    "Delray Beach",
    "Boynton Beach",
    "West Palm Beach",
    "Fort Lauderdale",
  ];
  const limits = [10, 20, 50, 100];

  return (
    <Container
      sx={{ display: "flex", flexDirection: "column", border: '1px solid gray', borderRadius: 5, marginBottom: 5, width: 'auto', padding: 3 }}
    >
      What are you looking for?
      <form
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: 'center'
        }}
      >
        <FormControl >
        <Input
          type="text"
          name="term"
          placeholder="Keyword(s)"
          sx={{ margin: 0, padding: 0 }}
          onChange={() => {
            handleSearchParams;
          }}
        />
        </FormControl>
        <Container sx={{display: 'flex', justifyContent: 'space-evenly', }}>
        <FormControl >
          <InputLabel id="location-input-label">Location</InputLabel>
          <Select
            labelId="location-input-label"
            placeholder="Location"
            id="location-input"
            label="location"
            name="location"
            sx={{ marginRight: 0, padding: 0, height: "5vh", width: 100 }}
            onChange={() => {
              handleSearchParams;
            }}
          >
            {locations.map((location) => (
              <MenuItem value={location} key={location}>
                {location}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <FormControl >
          <InputLabel id="distance-input-label">Distance</InputLabel>

          <Select
            labelId="distance-input-label"
            id="distance-input"
            label="distance"
            sx={{ margin: 0, padding: 0, height: "5vh", width: 100 }}
            placeholder="Within x miles"
            name="distance"
            onChange={() => {
              handleSearchParams;
            }}
          >
            <MenuItem value={8000} key={8000}>
              5 miles
            </MenuItem>
            <MenuItem value={16000} key={8000}>
              10 miles
            </MenuItem>
            <MenuItem value={24000} key={8000}>
              15 miles
            </MenuItem>
          </Select>
        </FormControl>

        <FormControl >
          <InputLabel id="sort_by-input-label">Sort By</InputLabel>

          <Select
            labelId="sort_by-input-label"
            id="sort_by-input"
            label="sort_by"
            name="sort_by"
            sx={{ margin: 0, padding: 0, height: "5vh", width: 100 }}
            onChange={() => {
              handleSearchParams;
            }}
          >
            <MenuItem value={"rating"} key={0}>
              Rating
            </MenuItem>
            <MenuItem value={"best_match"} key={1}>
              Best Match
            </MenuItem>
            <MenuItem value={"review_count"} key={2}>
              Review Count
            </MenuItem>
          </Select>
        </FormControl>
        </Container>
        {/* <InputLabel id="amount-input-label">Show # results</InputLabel>
        <Select
          labelId="limit-input-label"
          id="limit-input"
          label="amount"
          name="limit"
          onChange={() => {
            handleSearchParams;
          }}
        >
          {limits.map((limit) => (
            <MenuItem value={limit} key={limit}>
              {limit}
            </MenuItem>
          ))}
        </Select>
       */}
       <FormControl >
        <Input
          type="submit"
          sx={{ margin: 0, padding: 0, width: 100 }}
          onClick={findRecommendations}
        />
       </FormControl>
      </form>
    </Container>
  );
};

export default RecFilter;
