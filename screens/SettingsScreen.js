import React, { useState } from "react";
import {
    View,
    Text,
    StyleSheet,
    Image,
    TouchableOpacity,
    TextInput,
    ScrollView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

const SettingsScreen = () => {
    const [stocks, setStocks] = useState(["FB", "SHOP", "SQ"]);
    const [newStock, setNewStock] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [emailsAmount, setEmailsAmount] = useState(0);
    const [eventsAmount, setEventsAmount] = useState(0);
    const [tasksAmount, setTasksAmount] = useState(0);

    return (
        <View style={styles.wrapper}>
            <ScrollView>
                <Text style={[styles.title, { marginTop: 15 }]}>
                    Change/Add Google Account:
                </Text>
                <View style={{ flexDirection: "row" }}>
                    <View>
                        <TextInput
                            style={[styles.textInput, { marginBottom: 5 }]}
                            placeholder='Email'
                            autoCompleteType='email'
                            autoCorrect={false}
                            keyboardType='email-address'
                            autoCapitalize='none'
                            value={email}
                            onChangeText={(text) => setEmail(text)}
                        />
                        <TextInput
                            style={[styles.textInput, { marginTop: 5 }]}
                            placeholder='Password'
                            autoCompleteType='password'
                            autoCorrect={false}
                            secureTextEntry={true}
                            autoCapitalize='none'
                            value={password}
                            onChangeText={(text) => setPassword(text)}
                        />
                    </View>
                    <TouchableOpacity
                        style={{
                            alignSelf: "center",
                            marginLeft: 20,
                            flexDirection: "row",
                        }}
                    >
                        <Ionicons
                            name='ios-checkmark-circle-outline'
                            size={30}
                            color='white'
                        />
                        <Text style={styles.submit}>Submit</Text>
                    </TouchableOpacity>
                </View>

                <View
                    style={{
                        flexDirection: "row",
                        alignItems: "center",
                        marginTop: 15,
                        justifyContent: "space-between",
                    }}
                >
                    <Text style={[styles.title, { marginBottom: 0 }]}>
                        Amount of emails to show:{" "}
                    </Text>
                    <View style={{ flexDirection: "row" }}>
                        <TouchableOpacity
                            onPress={() =>
                                setEmailsAmount(
                                    emailsAmount > 0 ? emailsAmount - 1 : 0
                                )
                            }
                        >
                            <Text style={[styles.title, { marginBottom: 0 }]}>
                                {"   -   "}
                            </Text>
                        </TouchableOpacity>
                        <Text style={[styles.title, { marginBottom: 0 }]}>
                            {emailsAmount}
                        </Text>
                        <TouchableOpacity
                            onPress={() =>
                                setEmailsAmount(
                                    emailsAmount < 5 ? emailsAmount + 1 : 5
                                )
                            }
                        >
                            <Text style={[styles.title, { marginBottom: 0 }]}>
                                {"   +   "}
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>

                <View
                    style={{
                        flexDirection: "row",
                        alignItems: "center",
                        marginTop: 15,
                        justifyContent: "space-between",
                    }}
                >
                    <Text style={[styles.title, { marginBottom: 0 }]}>
                        Amount of events to show:{" "}
                    </Text>
                    <View style={{ flexDirection: "row" }}>
                        <TouchableOpacity
                            onPress={() =>
                                setEventsAmount(
                                    eventsAmount > 0 ? eventsAmount - 1 : 0
                                )
                            }
                        >
                            <Text style={[styles.title, { marginBottom: 0 }]}>
                                {"   -   "}
                            </Text>
                        </TouchableOpacity>
                        <Text style={[styles.title, { marginBottom: 0 }]}>
                            {eventsAmount}
                        </Text>
                        <TouchableOpacity
                            onPress={() =>
                                setEventsAmount(
                                    eventsAmount < 5 ? eventsAmount + 1 : 5
                                )
                            }
                        >
                            <Text style={[styles.title, { marginBottom: 0 }]}>
                                {"   +   "}
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>

                <View
                    style={{
                        flexDirection: "row",
                        alignItems: "center",
                        marginVertical: 15,
                        justifyContent: "space-between",
                    }}
                >
                    <Text style={[styles.title, { marginBottom: 0 }]}>
                        Amount of tasks to show:{" "}
                    </Text>
                    <View style={{ flexDirection: "row" }}>
                        <TouchableOpacity
                            onPress={() =>
                                setTasksAmount(
                                    tasksAmount > 0 ? tasksAmount - 1 : 0
                                )
                            }
                        >
                            <Text style={[styles.title, { marginBottom: 0 }]}>
                                {"   -   "}
                            </Text>
                        </TouchableOpacity>
                        <Text style={[styles.title, { marginBottom: 0 }]}>
                            {tasksAmount}
                        </Text>
                        <TouchableOpacity
                            onPress={() =>
                                setTasksAmount(
                                    tasksAmount < 5 ? tasksAmount + 1 : 5
                                )
                            }
                        >
                            <Text style={[styles.title, { marginBottom: 0 }]}>
                                {"   +   "}
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={styles.divider} />

                <View style={{ marginBottom: 5 }}>
                    <Text style={[styles.title, { marginTop: 15 }]}>
                        Stocks to Display:
                    </Text>
                    <View
                        style={{
                            flexDirection: "row",
                            alignItems: "center",
                            marginBottom: 15,
                        }}
                    >
                        <TextInput
                            style={[styles.textInput, { height: 35 }]}
                            placeholder='New Symbol'
                            autoCorrect={false}
                            autoCapitalize='characters'
                            value={newStock}
                            onChangeText={(text) => setNewStock(text)}
                            onSubmitEditing={() => {
                                if (stocks.indexOf(newStock) === -1) {
                                    setStocks([...stocks, newStock]);
                                    setNewStock("");
                                }
                            }}
                        />
                        <TouchableOpacity
                            style={{
                                alignSelf: "center",
                                marginLeft: 20,
                                flexDirection: "row",
                            }}
                            onPress={() => {
                                if (
                                    stocks.indexOf(newStock) === -1 &&
                                    newStock.length > 0
                                ) {
                                    setStocks([...stocks, newStock]);
                                    setNewStock("");
                                }
                            }}
                        >
                            <Ionicons
                                name='ios-add-circle-outline'
                                size={30}
                                color='white'
                            />
                            <Text style={styles.submit}>Add</Text>
                        </TouchableOpacity>
                    </View>
                    {stocks.map((stock) => {
                        return (
                            <View style={styles.stockContainer} key={stock}>
                                <TouchableOpacity
                                    onPress={() =>
                                        setStocks(
                                            stocks.filter((s) => s !== stock)
                                        )
                                    }
                                >
                                    <Ionicons
                                        name='ios-remove-circle-outline'
                                        size={20}
                                        color='red'
                                        style={{ marginRight: 15 }}
                                    />
                                </TouchableOpacity>
                                <Text style={styles.stock}>{stock}</Text>
                            </View>
                        );
                    })}
                </View>

                <View style={styles.divider} />

                <View
                    style={{
                        flexDirection: "row",
                        marginTop: 10,
                        alignItems: "center",
                    }}
                >
                    <Text style={[styles.title, { marginBottom: 0 }]}>
                        Upload new profile picture
                    </Text>
                    <TouchableOpacity
                        style={styles.uploadButton}
                        onPress={() => {
                            if (
                                stocks.indexOf(newStock) === -1 &&
                                newStock.length > 0
                            ) {
                                setStocks([...stocks, newStock]);
                                setNewStock("");
                            }
                        }}
                    >
                        <Ionicons
                            name='md-cloud-upload'
                            size={20}
                            color='white'
                        />
                        <Text style={styles.submit}>Upload</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </View>
    );
};

SettingsScreen.navigationOptions = (props) => ({
    headerLeft: () => (
        <TouchableOpacity
            onPress={() => {
                props.navigation.navigate("Home");
            }}
        >
            <Ionicons
                name='md-arrow-round-back'
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
});

const styles = StyleSheet.create({
    wrapper: {
        backgroundColor: "#181818",
        flex: 1,
        paddingHorizontal: 25,
    },
    divider: {
        flex: 1,
        height: 3,
        backgroundColor: "#1e1e1e",
    },
    title: {
        fontSize: 18,
        color: "#E8E8E8",
        fontWeight: "bold",
        marginBottom: 15,
    },
    textInput: {
        height: 40,
        width: 200,
        backgroundColor: "white",
        color: "black",
        paddingVertical: 5,
        paddingHorizontal: 5,
        fontSize: 16,
    },
    submit: {
        color: "white",
        fontWeight: "bold",
        fontSize: 13,
        alignSelf: "center",
        marginLeft: 5,
    },
    stockContainer: {
        flexDirection: "row",
        marginBottom: 10,
        alignItems: "center",
    },
    stock: {
        color: "white",
        fontWeight: "bold",
        fontSize: 15,
    },
    uploadButton: {
        alignSelf: "center",
        marginLeft: 20,
        flexDirection: "row",
        backgroundColor: "#2e2e2e",
        borderRadius: 8,
        paddingVertical: 3,
        paddingHorizontal: 5,
    },
});

export default SettingsScreen;
