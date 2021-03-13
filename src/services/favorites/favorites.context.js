import React, { createContext, useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const FavoriteContext = createContext();

export const FavoritesContextProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);

  const saveFavorites = async (value) => {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem("@favorites", jsonValue);
    } catch (error) {
      console.log("Error saving " + error);
    }
  };

  const loadFavorites = async () => {
    try {
      const value = await AsyncStorage.getItem("@favorites");
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
    saveFavorites(favorites);
  }, [favorites]);

  useEffect(() => {
    loadFavorites();
  }, []);

  return (
    <FavoriteContext.Provider
      value={{ favorites, addToFavorites: add, removeFromFavorites: remove }}
    >
      {children}
    </FavoriteContext.Provider>
  );
};
