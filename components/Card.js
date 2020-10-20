import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Card = ({
    children,
    title,
    subTitle,
    titleBackground,
    subTitleColor,
}) => {
    return (
        <View style={styles.wrapper}>
            <View
                style={[
                    styles.subContainer,
                    { backgroundColor: titleBackground },
                ]}
            >
                <Text style={styles.title}>{title}</Text>
                <View style={{ flexDirection: "column-reverse" }}>
                    {subTitle ? (
                        <Text
                            style={[
                                styles.subTitle,
                                { color: `${subTitleColor || "white"}` },
                            ]}
                        >
                            {subTitle}
                        </Text>
                    ) : null}
                </View>
            </View>
            <View style={{ paddingBottom: 10 }}>{children}</View>
        </View>
    );
};

const styles = StyleSheet.create({
    wrapper: {
        backgroundColor: "#45464D",
        alignSelf: "stretch",
        borderRadius: 10,
        marginBottom: 30,
    },
    subContainer: {
        borderTopEndRadius: 10,
        borderTopStartRadius: 10,
        flexDirection: "row",
        justifyContent: "space-between",
        paddingVertical: 5,
    },
    title: {
        fontSize: 22,
        color: "white",
        marginLeft: 10,
        fontWeight: "bold",
    },
    subTitle: {
        fontSize: 18,
        color: "white",
        marginRight: 10,
        fontWeight: "bold",
    },
});

export default Card;
