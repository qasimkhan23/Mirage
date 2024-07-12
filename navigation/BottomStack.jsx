import React, { FC, useEffect } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  InactiveHome,
  InactiveSearch,
  InactiveFavorite,
  InactiveOwner,
  InactiveAccount,
  ActiveHome,
  ActiveSearch,
  ActiveFavorite,
  ActiveOwner,
  ActiveAccount,
} from "../assets/svgs/svg";
import AccountStackScreens from "./AccountStack";
import HomestackScreens from "./HomeStack";
import FavoriteStackScreens from "./FavoriteStack";
import SearchStackScreens from "./SearchStack";
import OwnerStackScreens from "./OwnerStack";

const BottomTab = createBottomTabNavigator();

const BottomStackScreens = ({ navigation }) => {
  return (
    <BottomTab.Navigator
      initialRouteName="Home"
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarStyle: {
          backgroundColor: "#FFF",
        },
      })}
    >
      <BottomTab.Screen
        options={{
          tabBarIcon: ({ focused }) => {
            return focused ? <ActiveHome /> : <InactiveHome />;
          },
          tabBarActiveTintColor: "#E97400",
        }}
        component={HomestackScreens}
        name="Home"
      />
      <BottomTab.Screen
        options={{
          tabBarIcon: ({ focused }) => {
            return focused ? <ActiveSearch /> : <InactiveSearch />;
          },
          tabBarActiveTintColor: "#E97400",
        }}
        component={SearchStackScreens}
        name="Search"
      />
      <BottomTab.Screen
        options={{
          tabBarIcon: ({ focused }) => {
            return focused ? <ActiveFavorite /> : <InactiveFavorite />;
          },
          tabBarActiveTintColor: "#E97400",
        }}
        component={FavoriteStackScreens}
        name="Favorite"
      />
      <BottomTab.Screen
        options={{
          tabBarIcon: ({ focused }) => {
            return focused ? <ActiveOwner /> : <InactiveOwner />;
          },
          tabBarActiveTintColor: "#E97400",
        }}
        component={OwnerStackScreens}
        name="Owner"
      />
      <BottomTab.Screen
        options={{
          tabBarIcon: ({ focused }) => {
            return focused ? <ActiveAccount /> : <InactiveAccount />;
          },
          tabBarActiveTintColor: "#E97400",
        }}
        component={AccountStackScreens}
        name="Account"
      />
    </BottomTab.Navigator>
  );
};
export default BottomStackScreens;
