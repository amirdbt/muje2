import React, { useContext } from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import styled from "styled-components";
import { Text } from "../../../components/typography/text.component";

import { SafeArea } from "../../../components/utility/safe-area.component";
import { FavoriteContext } from "../../../services/favorites/favorites.context";
import { RestaurantInfoCard } from "../../restaurants/components/restaurant-info-card.component";
import { RestaurantList } from "../../restaurants/components/restaurant-list.styles";

const NoFavoritesArea = styled(SafeArea)`
  align-items: center;
  justify-content: center;
`;

export const FavoritesScreen = ({ navigation }) => {
  const { favorites } = useContext(FavoriteContext);
  return favorites.length ? (
    <SafeArea>
      <RestaurantList
        data={favorites}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("RestaurantDetail", {
                  restaurant: item,
                })
              }
            >
              <RestaurantInfoCard restaurant={item} />
            </TouchableOpacity>
          );
        }}
        keyExtractor={(item) => item.name}
      />
    </SafeArea>
  ) : (
    <NoFavoritesArea>
      <Text center>No Favorites yet.</Text>
    </NoFavoritesArea>
  );
};
