import React, { useContext } from "react";
import { SafeArea } from "../../../components/utility/safe-area.component";
import { List } from "react-native-paper";
import { AuthenticationContext } from "../../../services/authentication/authentication.context";

export const SettingsScreen = ({ navigation }) => {
  const { onLogout } = useContext(AuthenticationContext);
  return (
    <SafeArea>
      <List.Section>
        <List.Item
          style={{ padding: 16 }}
          title="Favorites"
          description="View your favorites"
          left={(props) => (
            <List.Icon {...props} color="midnightblue" icon="heart" />
          )}
          onPress={() => navigation.navigate("Favorites")}
        />
        <List.Item
          style={{ padding: 16 }}
          title="Logout"
          left={(props) => (
            <List.Icon {...props} color="midnightblue" icon="door" />
          )}
          onPress={onLogout}
        />
      </List.Section>
    </SafeArea>
  );
};
