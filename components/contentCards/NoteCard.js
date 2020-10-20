import React from "react";
import { Text, StyleSheet } from "react-native";

import Card from "../Card";

const NoteCard = () => {
    return (
        <Card title='Note' titleBackground='#BBBE57'>
            <Text style={styles.noteText}>
                This is a new note that you can write and add to your dashboard.
                I'm not sure if that will be a real feature but let's keep it
                here for now and see how we do with the development
            </Text>
        </Card>
    );
};

const styles = StyleSheet.create({
    noteText: {
        fontSize: 15,
        marginHorizontal: 15,
        marginVertical: 10,
        color: "#E8E8E8",
    },
});

export default NoteCard;
