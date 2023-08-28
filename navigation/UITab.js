import { StyleSheet, Text, View, ImageBackground } from "react-native";
import { Dispatch, Information, Message, TruckCheck } from "../Screens";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const Tab = createBottomTabNavigator();
const screenOptions = ({ route }) => ({
  headerShown: false,
  tabBarShowLabel: false,
  tabBarInactiveTintColor: "#fefbff",
  tabBarStyle: {
    height: 70,
    backgroundColor: "#ffff",
    paddingTop: 5,
  },
  tabBarIcon: ({ focused, color, size }) => {
    const nameIcon =
      route.name === "Dispatch"
        ? "truck-delivery-outline"
        : route.name === "TruckCheck"
        ? "truck-check-outline"
        : route.name === "Message"
        ? "chat-processing-outline"
        : route.name === "Information"
        ? "account-circle-outline"
        : "";
    return (
      <View style={[{ paddingBottom: 7, alignItems: "center" }]}>
        <ImageBackground
          style={[
            {
              paddingTop: 5,
              width: 67,
              height: 33,
              alignItems: "center",
              borderRadius: 20,
            },
            focused && { backgroundColor: "#9BC4F4" },
          ]}
        >
          <Icon
            name={focused ? nameIcon.replace("-outline", "") : nameIcon}
            size={22}
            color={"#24519B"}
            style={!focused && { opacity: 0.7 }}
          />
        </ImageBackground>
        <Text
          style={[
            { fontSize: 12, fontWeight: "600", color: "#24519B" },
            !focused && { opacity: 0.7 },
          ]}
        >
          {route.name}
        </Text>
      </View>
    );
  },
});
export default function UITab() {
  return (
    <Tab.Navigator screenOptions={screenOptions}>
      <Tab.Screen name="Dispatch" component={Dispatch} />
      <Tab.Screen name="TruckCheck" component={TruckCheck} />
      <Tab.Screen name="Message" component={Message} />
      <Tab.Screen name="Information" component={Information} />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({});
