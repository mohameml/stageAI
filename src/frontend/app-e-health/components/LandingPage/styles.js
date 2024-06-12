import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#e8eef7",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
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

export default styles;
