import React, { createContext, useState } from "react";

export const FavoriteContext = createContext();

export const FavoritesContextProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);

  const add = (restaurant) => {
    setFavorites(...favorites, restaurant);
  };
  const remove = (restaurant) => {
    const newFavorite = favorites.filter(
      (x) => x.placeId !== restaurant.placeId
    );
    setFavorites(newFavorite);
  };

  return (
    <FavoriteContext.Provider
      value={{ favorites, addToFavorites: add, removeFromFavorites: remove }}
    >
      {children}
    </FavoriteContext.Provider>
  );
};
