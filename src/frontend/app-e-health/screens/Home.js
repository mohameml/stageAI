import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { auth } from "../config/firebase";
import FoncView from "../components/foncView/foncView";
import { Feather } from "@expo/vector-icons";
import dataFonc from "./../data/dataFonc";

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
            {/* <Text style={styles.txtInfos}>
                Email :{auth.currentUser?.email}
            </Text>
            <TouchableOpacity style={styles.btn} onPress={handelLogOut}>
                <Text style={styles.txt}>Log Out</Text>
            </TouchableOpacity> */}
            <View style={styles.containerTilte}>
                <Feather name="file-plus" size={24} color={"#74ad9c"} />
                <Text style={styles.tilte}>Journal de santé</Text>
            </View>

            <View style={styles.viewFonc}>
                {dataFonc.map((elem) => {
                    return (
                        <FoncView
                            key={elem.title}
                            title={elem.title}
                            image={elem.url}
                            desc={elem.desc}
                        />
                    );
                })}
            </View>
        </View>
    );
};

export default Home;

const styles = StyleSheet.create({
    conatiner: {
        width: "100%",
        flex: 1,
        padding: 10,
        backgroundColor: "white",
    },
    tilte: {
        fontSize: 20,
        fontWeight: "500",
    },
    containerTilte: {
        flexDirection: "row",
        padding: 5,
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
    viewFonc: {
        width: "100%",
        padding: 5,
        justifyContent: "space-between",
        alignItems: "flex-start",
        flexDirection: "row",
        flexWrap: "wrap",
        gap: 5,
    },
});
