import { StyleSheet, Text, Image, Pressable } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const FoncView = ({ title, image, desc }) => {
    function handelPress() {
        console.log("Press ", title);
        navigation.navigate(title);
    }

    const navigation = useNavigation();

    return (
        <Pressable style={styles.container} onPress={handelPress}>
            <Text style={styles.title}>{title}</Text>
            <Image source={image} style={styles.img} />
            <Text style={styles.unite}>{desc}</Text>
        </Pressable>
    );
};

export default FoncView;

const styles = StyleSheet.create({
    container: {
        width: "45%",
        borderRadius: 15,
        backgroundColor: "#deeefe",
        justifyContent: "center",
        alignItems: "center",
        padding: 10,
    },
    img: {
        width: "100%",
        height: "15%",
        resizeMode: "contain",
        marginVertical: 10,
    },
    title: {
        fontSize: 20,
        fontWeight: "500",
    },
    mesure: {
        fontSize: 25,
        color: "#43659f",
        fontWeight: "bold",
    },
    unite: {
        fontSize: 12,
        color: "#7e899b",
        textAlign: "center",
    },
});
