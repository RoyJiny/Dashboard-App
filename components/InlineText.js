import React from "react";
import { View, Text, StyleSheet } from "react-native";

const InlineText = ({ text, subText, secondaryText, subTextColor }) => {
    return (
        <View style={styles.wrapper}>
            <View style={{ flexDirection: "row" }}>
                <View style={styles.sideStick}></View>
                <Text style={styles.mainText}>{text}</Text>
                {secondaryText ? (
                    <Text style={styles.secondaryText}>{secondaryText}</Text>
                ) : null}
            </View>
            <Text
                style={[
                    styles.subText,
                    { color: `${subTextColor || "#A6A1A1"}` },
                ]}
            >
                {subText}
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    wrapper: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 10,
    },
    sideStick: {
        marginRight: 5,
        width: 5,
        marginLeft: 5,
        backgroundColor: "#707070",
        height: 24,
    },
    mainText: {
        color: "white",
        fontWeight: "bold",
        fontSize: 16,
        alignSelf: "center",
    },
    secondaryText: {
        marginLeft: 5,
        fontSize: 16,
        color: "white",
    },
    subText: {
        marginRight: 10,
        fontStyle: "italic",
    },
});

export default InlineText;
