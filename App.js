import React from "react";
import { StatusBar } from "react-native";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import HomeScreen from "./screens/HomeScreen";
import SettingsScreen from "./screens/SettingsScreen";

const stackNavigator = createStackNavigator(
    {
        Home: HomeScreen,
        Settings: SettingsScreen,
    },
    {
        defaultNavigationOptions: {
            headerStyle: {
                backgroundColor: "#181818",
                shadowColor: "transparent",
                elevation: 0,
            },
            title: "",
        },
    }
);

const App = createAppContainer(stackNavigator);

export default () => {
    return (
        <>
            <StatusBar
                barStyle='light-content'
                translucent={true}
                backgroundColor='#181818'
            />
            <App />
        </>
    );
};
