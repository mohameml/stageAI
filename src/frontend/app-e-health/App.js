import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image, Pressable } from "react-native";

export default function App() {
    return (
        <View style={styles.container}>
            <Image
                source={require("./assets/images/cardiogram.png")}
                style={styles.logo}
            />
            <Text style={styles.description}>
                Commancer à suivre votre Sante
            </Text>
            <Text style={styles.sousDescription}>
                Cette application vous permet de suivre votre santé ,et bien
                plus encore
            </Text>
            <Pressable
                style={styles.btn}
                onPress={() => console.log("Press Commancer")}
            >
                <Text style={styles.txtBtn}>Commancer</Text>
            </Pressable>
            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#e8eef7",
        alignItems: "center",
        justifyContent: "center",
    },
    logo: {
        width: 300,
        height: 100,
        resizeMode: "contain",
    },
    description: {
        fontSize: 30,
        fontWeight: "bold",
        textAlign: "center",
        marginBottom: 20,
        marginTop: 20,
    },
    sousDescription: {
        fontSize: 16,
        textAlign: "center",
        color: "#b8bcc2",
        marginBottom: 50,
    },
    btn: {
        width: "80%",
        backgroundColor: "blue",
        padding: 10,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 20,
    },
    txtBtn: {
        color: "white",
        fontSize: 18,
    },
});
