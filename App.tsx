import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "./src/screen/login/Login";
import Playlists from "./src/screen/playlists/Playlists";
import Songs from "./src/screen/songs/Songs";
import React, { useEffect, useState } from "react";
import { User, onAuthStateChanged } from "firebase/auth";
import { FIREBASE_AUTH } from "./Firebase";
import SignUp from "./src/screen/signup/Signup";
import useColors from "./src/utilities/useColors";
import Settings from "./src/screen/settings/Settings";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";
import {
  LOGIN_SCREEN,
  PLAYLISTS_SCREEN,
  SETTINGS_SCREEN,
  SIGN_UP_SCREEN,
  SONGS_SCREEN,
} from "./src/screen/screenConstatns";
import { Icon } from "./src/components";

const Stack = createNativeStackNavigator();
const AuthenticatedDrawer = createDrawerNavigator();
const AuthenticatedStack = createNativeStackNavigator();
const UnauthenticatedStack = createBottomTabNavigator();

function AuthenticatedDrawerLayout() {
  return (
    <AuthenticatedDrawer.Navigator>
      <AuthenticatedDrawer.Screen
        name={PLAYLISTS_SCREEN}
        component={Playlists}
      />
      <AuthenticatedDrawer.Screen name={SETTINGS_SCREEN} component={Settings} />
    </AuthenticatedDrawer.Navigator>
  );
}

function AuthenticatedStackLayout() {
  return (
    <AuthenticatedStack.Navigator initialRouteName="AuthenticatedDrawer">
      <AuthenticatedStack.Screen
        name="AuthenticatedDrawer"
        component={AuthenticatedDrawerLayout}
        options={{ headerShown: false }}
      />
      <AuthenticatedStack.Screen name={SONGS_SCREEN} component={Songs} />
    </AuthenticatedStack.Navigator>
  );
}

function UnauthenticatedLayout() {
  const colors = useColors();
  return (
    <UnauthenticatedStack.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color }) => {
          if (route.name === LOGIN_SCREEN) {
            return <Icon name="LOGIN" color={color} />;
          } else if (route.name === SIGN_UP_SCREEN) {
            return <Icon name="SIGNUP" color={color} />;
          }
        },
        tabBarActiveTintColor: colors.primary,
        tabBarActiveBackgroundColor: colors.background,
        tabBarInactiveTintColor: colors.border,
        tabBarInactiveBackgroundColor: colors.background,
      })}
    >
      <UnauthenticatedStack.Screen name={LOGIN_SCREEN} component={Login} />
      <UnauthenticatedStack.Screen name={SIGN_UP_SCREEN} component={SignUp} />
    </UnauthenticatedStack.Navigator>
  );
}

export default function App() {
  const [user, setUser] = useState<User | null>(null);
  const colors = useColors();

  useEffect(() => {
    onAuthStateChanged(FIREBASE_AUTH, (user) => {
      console.log(user);
      setUser(user);
    });
  });

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        {user ? (
          <Stack.Screen
            name="Authenticated"
            component={AuthenticatedStackLayout}
            options={{ headerShown: false }}
          />
        ) : (
          <Stack.Screen
            name="Unauthenticated"
            component={UnauthenticatedLayout}
            options={{ headerShown: false }}
          />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
