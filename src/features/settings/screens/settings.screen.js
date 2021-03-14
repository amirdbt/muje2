import React, { useContext } from "react";
import styled from "styled-components";
import { SafeArea } from "../../../components/utility/safe-area.component";
import { List, Avatar } from "react-native-paper";
import { AuthenticationContext } from "../../../services/authentication/authentication.context";
import { Spacer } from "../../../components/spacer/spacer.component";
import { Text } from "../../../components/typography/text.component";
import { TouchableOpacity } from "react-native";

const SettingsItem = styled(List.Item)`
  padding: ${(props) => props.theme.space[3]};
`;

const AvatarContainer = styled.View`
  align-items: center;
  margin-top: ${(props) => props.theme.space[3]};
`;

export const SettingsScreen = ({ navigation }) => {
  const { onLogout, user } = useContext(AuthenticationContext);
  return (
    <SafeArea>
      <AvatarContainer>
        <TouchableOpacity onPress={() => navigation.navigate("Camera")}>
          <Avatar.Icon size={170} icon="human" backgroundColor="#1f337a" />
        </TouchableOpacity>
        <Spacer position="top" size="large">
          <Text variant="label">{user.email}</Text>
        </Spacer>
      </AvatarContainer>
      <List.Section>
        <SettingsItem
          title="Favorites"
          description="View your favorites"
          left={(props) => (
            <List.Icon {...props} color="midnightblue" icon="heart" />
          )}
          onPress={() => navigation.navigate("Favorites")}
        />
        <SettingsItem
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
