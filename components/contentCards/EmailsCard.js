import React from "react";
import { Text, StyleSheet } from "react-native";

import Card from "../Card";
import InlineText from "../InlineText";

const EmailsCard = () => {
    return (
        <Card title='Recent Emails' titleBackground='#D16A6A'>
            <InlineText text='Michal Jiny' subText='15/11 09:37' />
            <Text style={styles.description}>
                This is the content of the email
            </Text>

            <InlineText text='Shimon Jiny' subText='24/04 11:45' />
            <Text style={styles.description}>
                This is the content of the email
            </Text>

            <InlineText text='TAU Students' subText='08/12 06:54' />
            <Text style={styles.description}>
                This is the content of the email
            </Text>
        </Card>
    );
};

const styles = StyleSheet.create({
    description: {
        marginLeft: 15,
        color: "#E8E8E8",
        fontSize: 13,
    },
});

export default EmailsCard;
