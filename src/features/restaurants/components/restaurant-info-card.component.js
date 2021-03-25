import React from "react";
import { View } from "react-native";
import { SvgXml } from "react-native-svg";
import star from "../../../../assets/star";
import open from "../../../../assets/open";
import { Text } from "../../../components/typography/text.component";
import {
  RestaurantCard,
  RestaurantCardCover,
  Address,
  Info,
  Rating,
  Section,
  Open,
  Icon,
  SectionEnd,
} from "./restaurant-info-card.styles";
import { Spacer } from "../../../components/spacer/spacer.component";
import { Favorite } from "../../../components/favorites/favorite.component";

export const RestaurantInfoCard = ({ restaurant = {} }) => {
  const {
    name = "Danbtta Restaurant",
    icon = "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png",
    photos = [
      "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    ],
    address = "Dantata Estate kubwa",
    isOpenNow = true,
    rating = 4,
    isClosedTemporarily = true,
    placeId,
  } = restaurant;

  const ratingArray = Array.from(new Array(Math.ceil(rating)));

  return (
    <View>
      <RestaurantCard elevation={2}>
        <Favorite restaurant={restaurant} />
        <RestaurantCardCover key={name} source={{ uri: photos[0] }} />
        <Info>
          <Text variant="label">{name}</Text>
          <Section>
            <Rating>
              {ratingArray.map((_, index) => (
                <SvgXml
                  key={`start-${placeId}-${index}`}
                  xml={star}
                  width={20}
                  height={20}
                />
              ))}
            </Rating>
            <SectionEnd>
              {isClosedTemporarily && (
                <Text variant="error" style={{ paddingTop: 5 }}>
                  CLOSED TEMPORARILY
                </Text>
              )}
              <Spacer position="left" size="large">
                {isOpenNow && (
                  <Open>
                    <SvgXml xml={open} width={20} height={20} />
                  </Open>
                )}
              </Spacer>
              <Spacer position="left" size="large">
                <Icon source={{ uri: icon }} />
              </Spacer>
            </SectionEnd>
          </Section>
          <Address>{address}</Address>
        </Info>
      </RestaurantCard>
    </View>
  );
};
