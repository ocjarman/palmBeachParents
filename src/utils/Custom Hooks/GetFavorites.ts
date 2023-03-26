import React from 'react';
import axios from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setFavorites } from '../../store/favoritesSlice';
import { RootState } from '../../store';

const GetFavorites = () => {
    const favorites = useSelector((state: RootState) => state.favorites.favorites)
    const dispatch = useDispatch();
    const getUsersFavorites = async () => {
        const token = window.localStorage.getItem("token");
        if (token) {
            const usersFavorites = await axios.get("/api/favorites", {
                headers: { Authorization: "Bearer " + token },
              });
            dispatch(setFavorites(usersFavorites.data));
        } else {
            console.log('must be logged in for favorites')
        }
    };
  
    useEffect(() => {
        getUsersFavorites();
    }, []);
};

export default GetFavorites;
