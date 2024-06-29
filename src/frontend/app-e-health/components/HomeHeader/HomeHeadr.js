import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { FontAwesome } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import colors from "../../constant/colors";

const HomeHeadr = () => {
    const navigation = useNavigation();
    console.log(navigation);

    const handelPress = () => {
        console.log("HeaderHome go to profile ");
        navigation.navigate("Profil");
    };

    return (
        <Pressable onPress={handelPress}>
            <View style={styles.user}>
                <FontAwesome name="user" size={24} color={colors.background} />
                {/* <Text>text</Text> */}
            </View>
        </Pressable>
    );
};

export default HomeHeadr;

const styles = StyleSheet.create({
    user: {
        width: 40,
        height: 40,
        borderRadius: 20,
        backgroundColor: "#ccc",
        marginRight: 15,
        justifyContent: "center",
        alignItems: "center",
    },
});
