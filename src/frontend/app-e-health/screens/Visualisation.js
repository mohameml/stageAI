import { ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import Courbe from "../components/chart/Courbe";
import HealthLineChart from "../components/chart/chartLine";
import Bar from "../components/chart/Bar";
import { ActivityIndicator } from "react-native";

import { getHeartRatePerDay } from "../backend/DataSante";

const Visualisation = () => {
    const [dataUserSante, setDataUserSante] = useState();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fecthMesureSante = async () => {
            try {
                const mesuresUser = await getHeartRatePerDay();
                console.log(mesuresUser);
                console.log(mesuresUser.map((item) => item.date));
                setDataUserSante(mesuresUser);
            } catch (e) {
                console.log("Failed to fetch heart rate data", e);
            } finally {
                setLoading(false);
            }
        };
        fecthMesureSante();
        // return () =>;
    }, []);

    if (loading) {
        return (
            <View style={styles.wait}>
                <ActivityIndicator size={"large"} />
            </View>
        );
    }

    return (
        <ScrollView
            contentContainerStyle={{ backgroundColor: "white" }}
            showsVerticalScrollIndicator={false}
        >
            {/* chart 1 :  */}
            <Text style={styles.titleChart}>Mesure Cardiatique </Text>
            <HealthLineChart
                labels={dataUserSante.map((item) => item.date)}
                data={dataUserSante.map((item) => item.heartRate)}
            />
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
