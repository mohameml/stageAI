import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { FontAwesome } from "@expo/vector-icons";
import colors from "../constant/colors";
import { useNavigation } from "@react-navigation/native";
import { Entypo } from "@expo/vector-icons";

const Historique = () => {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <View style={styles.itemView}>
                <Text style={styles.itemText}>Historique</Text>
                <TouchableOpacity style={styles.btnView}>
                    <FontAwesome name="history" size={24} color="white" />
                    <Text style={styles.btnText}>
                        rechercher dans l'historique
                    </Text>
                </TouchableOpacity>
            </View>
            <View style={styles.itemView}>
                <Text style={styles.itemText}>Visualisation</Text>
                <TouchableOpacity
                    style={styles.btnView}
                    onPress={() => navigation.navigate("Visualisation")}
                >
                    <Entypo name="bar-graph" size={24} color="white" />
                    <Text style={styles.btnText}>
                        visualisez l'hisotrique de vos mesures de santé
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default Historique;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // justifyContent: "center",
        alignItems: "center",
        backgroundColor: "white",
    },
    itemView: {
        padding: 5,
        width: "100%",
        marginVertical: 10,
    },
    itemText: {
        fontSize: 20,
        fontWeight: "bold",
        marginBottom: 5,
        color: "black",
    },
    btnView: {
        flexDirection: "row",
        backgroundColor: "red",
        padding: 10,
        borderRadius: 10,
        backgroundColor: colors.primary,
    },
    btnText: {
        marginLeft: 5,
        color: "white",
        fontSize: 15,
        fontWeight: "400",
    },
});
