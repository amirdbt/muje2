import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import React from "react";
import { ThemeProvider } from "styled-components";
import { theme } from "./src/infrastructure/theme";
import * as firebase from "firebase";

//Navigation
import { Navigation } from "./src/infrastructure/navigation";

//Contexts Apis
import { AuthenticationContextProvider } from "./src/services/authentication/authentication.context";
import { RestaurantsContextProvider } from "./src/services/restaurants/restaurants.context";
import { LocationContextProvider } from "./src/services/location/location.context";
import { FavoritesContextProvider } from "./src/services/favorites/favorites.context";

//fonts
import {
  useFonts as useOswald,
  Oswald_400Regular,
} from "@expo-google-fonts/oswald";
import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";

const firebaseConfig = {
  apiKey: "AIzaSyAqFGcgYlUJ--guGvEHG7ryHcy1hERMuuY",
  authDomain: "muje2-8ef5d.firebaseapp.com",
  projectId: "muje2-8ef5d",
  storageBucket: "muje2-8ef5d.appspot.com",
  messagingSenderId: "710491234153",
  appId: "1:710491234153:web:7e6495c5eec3a1a63567f8",
};
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default function App() {
  const [oswaldLoaded] = useOswald({ Oswald_400Regular });
  const [latoLoaded] = useLato({ Lato_400Regular });

  if (!oswaldLoaded || !latoLoaded) {
    return null;
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <AuthenticationContextProvider>
          <FavoritesContextProvider>
            <LocationContextProvider>
              <RestaurantsContextProvider>
                <Navigation />
              </RestaurantsContextProvider>
            </LocationContextProvider>
          </FavoritesContextProvider>
        </AuthenticationContextProvider>
      </ThemeProvider>
      <ExpoStatusBar style="auto" />
    </>
  );
}
