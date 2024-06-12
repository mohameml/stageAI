import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import LandigPage from "./components/LandingPage";

export default function App() {
    return (
        <View style={styles.container}>
            <LandigPage />
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
});
