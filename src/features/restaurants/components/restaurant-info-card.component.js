import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Card } from "react-native-paper";
import styled from "styled-components/native";

const Title = styled.Text`
  padding: 16px;
`;

export const RestaurantInfoCard = ({ restaurant = {} }) => {
  const {
    name = "Danbtta Restaurant",
    icon,
    photos = [
      "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    ],
    address = "Dantata Estate kubwa",
    isOpenNow = true,
    rating = 4,
    isClosedTemporarily,
  } = restaurant;
  return (
    <View>
      <Card elevation={5} style={styles.card}>
        <Card.Cover
          key={name}
          source={{ uri: photos[0] }}
          style={styles.cover}
        />
        <Title>{name}</Title>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
  },
  cover: { padding: 20, backgroundColor: "#fff" },
});
