import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import Courbe from "../components/chart/Courbe";
import HealthLineChart from "../components/chart/chartLine";
import Bar from "../components/chart/Bar";

const Visualisation = () => {
    return (
        <ScrollView
            contentContainerStyle={{ backgroundColor: "white" }}
            showsVerticalScrollIndicator={false}
        >
            {/* chart 1 :  */}
            <Text style={styles.titleChart}>Mesure Cardiatique </Text>
            <HealthLineChart />
            {/* chart 2 :  */}
            <Text style={styles.titleChart}>Mesure Cardiatique</Text>
            <Courbe />
            {/* chart 3 :  */}
            <Text style={styles.titleChart}>Mesure Cardiatique</Text>
            <Bar />
            {/* chart 4 :  */}
            <Text style={styles.titleChart}>Mesure Cardiatique</Text>
            <HealthLineChart />
        </ScrollView>
    );
};

export default Visualisation;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // justifyContent: "center",
        // justifyContent: "flex-start",
        alignItems: "center",
    },
    titleChart: {
        textAlign: "center",
        fontSize: 20,
        fontWeight: "bold",
    },
});
