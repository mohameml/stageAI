import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { Button } from "react-native-paper";

import Table from "../components/Table/Table";
import { getHeartRatePerDay } from "../backend/DataSante";
import { ActivityIndicator } from "react-native";

import { Dimensions } from "react-native";

import {
    extractJourMoisAnneeFormatDDMMAAAA,
    reverseString,
    extractJourMoisAnneeFormatAAAAMMDD,
} from "../utils/utils";

const Historique = () => {
    const navigation = useNavigation();

    const [loading, setLoading] = useState(true);
    const [dataUser, setDataUser] = useState([]);

    const handelFilter = (DateFrom, DateTo) => {
        const dataFilter = dataUser.filter((item) => {
            const { jour, mois, annee } = extractJourMoisAnneeFormatDDMMAAAA(
                item.date
            );
            const {
                jour: jourFrom,
                mois: moisFrom,
                annee: anneeFrom,
            } = extractJourMoisAnneeFormatAAAAMMDD(DateFrom);
            const {
                jour: jourTo,
                mois: moisTo,
                annee: anneeTo,
            } = extractJourMoisAnneeFormatAAAAMMDD(DateTo);

            console.log(jour, mois, annee);
            console.log(jourFrom, moisFrom, anneeFrom);
        });
    };

    useEffect(() => {
        const fecthMesureSante = async () => {
            let count = 0;
            try {
                const mesuresUser = await getHeartRatePerDay();

                setDataUser(
                    mesuresUser.map((item) => {
                        count++;
                        return {
                            key: count,
                            heartRate: Number(item.heartRate),
                            date: item.date.slice(0, 10),
                        };
                    })
                );
            } catch (e) {
                console.log("Failed to fetch heart rate data", e);
            } finally {
                setLoading(false);
            }
        };
        fecthMesureSante();
    }, []);

    if (loading) {
        return (
            <View>
                <ActivityIndicator size={"large"} />
            </View>
        );
    }

    return (
        <View style={styles.container}>
            <View style={styles.btns}>
                <Button
                    mode="outlined"
                    onPress={() =>
                        navigation.navigate("Visualisation", { data: dataUser })
                    }
                >
                    visualiser
                </Button>

                <Button
                    mode="outlined"
                    onPress={() => {
                        navigation.navigate("filter", {
                            handelFilter: handelFilter,
                        });
                    }}
                >
                    filtrer
                </Button>
            </View>
            <Table items={dataUser} />
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

    btns: {
        // backgroundColor: "red",
        width: "100%",
        padding: 5,
        flexDirection: "row",
        justifyContent: "flex-end",
        gap: 10,
    },
    moadlConatiner: {
        width: "100%",
        height: Dimensions.get("window"),
        // backgroundColor: "white",
    },

    modalContainer: {
        backgroundColor: "red",
        width: "100%",
    },
});
