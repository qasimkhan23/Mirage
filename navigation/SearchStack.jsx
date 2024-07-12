import React, { FC } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SearchScreen from "../src/screens/search/Search";
import PropertyDetailScreen from "../src/screens/propertyDetail/PropertyDetail";
import AgentProfileScreen from "../src/screens/agentProfile/AgentProfile";
const SearchStack = createNativeStackNavigator();

const SearchStackScreens = () => {
  return (
    <SearchStack.Navigator screenOptions={{ headerShown: false }}>
      <SearchStack.Screen
        component={SearchScreen}
        name="SearchScreen"
        initialParams={{ modalVisible: false }}
      />
      <SearchStack.Screen
        component={PropertyDetailScreen}
        name="PropertyDetailScreen"
      />
      <SearchStack.Screen
        component={AgentProfileScreen}
        name="AgentProfileScreen"
      />
    </SearchStack.Navigator>
  );
};
export default SearchStackScreens;
