import React from "react";
import {
    View,
    Text,
    StyleSheet,
    Image,
    TouchableOpacity,
    ScrollView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

import EventsCard from "../components/contentCards/EventsCard";
import PortfolioCard from "../components/contentCards/PortfolioCard";
import EmailsCard from "../components/contentCards/EmailsCard";
import TasksCard from "../components/contentCards/TasksCard";
import WeatherCard from "../components/contentCards/WeatherCard";
import NoteCard from "../components/contentCards/NoteCard";

const HomeScreen = () => {
    const name = "Roy";
    const time = getGreetingByTime();

    return (
        <View style={styles.wrapper}>
            <View style={styles.firstRow}>
                <Text style={styles.greeting}>
                    Good {time}, {name}
                </Text>
            </View>

            <ScrollView>
                <EventsCard />
                <PortfolioCard stocks={["SHOP", "FB"]} />
                <EmailsCard />
                <TasksCard />
                <WeatherCard />
                <NoteCard />
            </ScrollView>
        </View>
    );
};

const getGreetingByTime = () => {
    var time = new Date().getHours();
    if (time >= 5 && time < 12) return "Morning";
    if (time >= 12 && time < 18) return "Afternoon";
    if (time >= 18 && time < 21) return "Evening";
    return "Night";
};

HomeScreen.navigationOptions = (props) => {
    return {
        headerRight: () => (
            <TouchableOpacity
                onPress={() => {
                    props.navigation.navigate("Settings");
                }}
            >
                <Ionicons
                    name='md-settings'
                    size={30}
                    color='white'
                    style={{ marginRight: 15 }}
                />
            </TouchableOpacity>
        ),
        headerLeft: () => (
            <TouchableOpacity onPress={() => {}}>
                <Ionicons
                    name='md-refresh'
                    size={30}
                    color='white'
                    style={{ marginLeft: 15 }}
                />
            </TouchableOpacity>
        ),
        headerTitle: () => (
            <TouchableOpacity onPress={() => {}}>
                <Image
                    source={require("../tmp/profilePic.jpeg")}
                    style={{
                        width: 40,
                        height: 40,
                        alignSelf: "center",
                        borderRadius: 15,
                    }}
                />
            </TouchableOpacity>
        ),
        headerTitleAlign: "center",
    };
};

const styles = StyleSheet.create({
    wrapper: {
        backgroundColor: "#181818",
        flex: 1,
        paddingHorizontal: 25,
    },
    firstRow: {
        flexDirection: "row",
        alignSelf: "stretch",
        justifyContent: "space-between",
        marginBottom: 30,
    },
    profilePic: {
        width: 40,
        height: 40,
        alignSelf: "flex-end",
    },
    greeting: {
        color: "#E8E8E8",
        fontWeight: "bold",
        fontSize: 27,
        marginRight: 5,
    },
});

export default HomeScreen;
