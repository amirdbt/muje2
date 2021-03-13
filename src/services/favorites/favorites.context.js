import React, { createContext, useState, useEffect, useContext } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { AuthenticationContext } from "../authentication/authentication.context";

export const FavoriteContext = createContext();

export const FavoritesContextProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);
  const { user } = useContext(AuthenticationContext);

  const saveFavorites = async (value, uid) => {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem(`@favorites-${uid}`, jsonValue);
    } catch (error) {
      console.log("Error saving " + error);
    }
  };

  const loadFavorites = async (uid) => {
    try {
      const value = await AsyncStorage.getItem(`@favorites-${uid}`);
      if (value !== null) {
        setFavorites(JSON.parse(value));
      }
    } catch (error) {
      console.log("Error loading " + error);
    }
  };

  const add = (restaurant) => {
    setFavorites([...favorites, restaurant]);
  };
  const remove = (restaurant) => {
    const newFavorite = favorites.filter(
      (x) => x.placeId !== restaurant.placeId
    );
    setFavorites(newFavorite);
  };

  useEffect(() => {
    if (user && user.uid && favorites) {
      saveFavorites(favorites, user.uid);
    }
  }, [favorites, user]);

  useEffect(() => {
    if (user && user.uid) {
      loadFavorites(user.uid);
    }
  }, [user]);

  return (
    <FavoriteContext.Provider
      value={{ favorites, addToFavorites: add, removeFromFavorites: remove }}
    >
      {children}
    </FavoriteContext.Provider>
  );
};
