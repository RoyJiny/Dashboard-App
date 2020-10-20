import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

import Card from "../Card";

const WeatherCard = () => {
    return (
        <Card title="Today's Weather" titleBackground='#4E8680'>
            <View style={styles.wrapper}>
                <Text style={styles.location}>Tel Aviv</Text>
                <View style={styles.tempContainer}>
                    <Text style={styles.temperature}>{"27" + "°"}</Text>
                    <Image
                        source={require("../../tmp/weather.png")}
                        style={styles.weatherImg}
                    />
                </View>
            </View>
        </Card>
    );
};

const styles = StyleSheet.create({
    wrapper: {
        flexDirection: "row",
        justifyContent: "space-around",
    },
    location: {
        fontSize: 24,
        fontWeight: "bold",
        color: "#E8E8E8",
        marginVertical: 10,
        textAlignVertical: "center",
    },
    tempContainer: {
        justifyContent: "center",
        flexDirection: "row",
    },
    temperature: {
        fontSize: 18,
        fontWeight: "bold",
        color: "#E8E8E8",
        textAlignVertical: "center",
        marginRight: 10,
    },
    weatherImg: {
        height: 30,
        width: 30,
        alignSelf: "center",
    },
});

export default WeatherCard;
