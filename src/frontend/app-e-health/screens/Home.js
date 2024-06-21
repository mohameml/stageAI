import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { auth } from "../config/firebase";

const Home = ({ navigation }) => {
    const handelLogOut = () => {
        auth.signOut()
            .then(() => {
                navigation.replace("Login");
            })
            .catch((err) => alert(err.message));
    };

    return (
        <View style={styles.conatiner}>
            <Text style={styles.txtInfos}>
                Email :{auth.currentUser?.email}
            </Text>
            <TouchableOpacity style={styles.btn} onPress={handelLogOut}>
                <Text style={styles.txt}>Log Out</Text>
            </TouchableOpacity>
        </View>
    );
};

export default Home;

const styles = StyleSheet.create({
    conatiner: {
        width: "100%",
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    txtInfos: {
        fontSize: 20,
    },
    btn: {
        padding: 10,
        marginTop: 20,
        backgroundColor: "#0782F9",
        borderRadius: 10,
        alignItems: "center",
        width: "60%",
    },
    txt: {
        fontSize: 20,
        color: "white",
    },
});
