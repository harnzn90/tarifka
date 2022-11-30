
import React from "react";
import { View,Text } from "react-native";
import { SafeAreaView } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Categories from "./pages/Categories/Categories";
import Details from "./pages/Details/Details";
import Meals from "./pages/Meals/Meals";
import Config from "react-native-config";


const Router=()=> {
 
  const Stack = createNativeStackNavigator();
 
  return(
     <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Categories" component={Categories}/>
          <Stack.Screen name="Meals"      component={Meals}/>
          <Stack.Screen name="Details"    component={Details}/>
        </Stack.Navigator>
        
      </NavigationContainer>
    
  )
};

export default Router;