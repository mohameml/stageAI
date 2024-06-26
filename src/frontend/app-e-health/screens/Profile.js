import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useLayoutEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import InputInfo from "../components/InputInfo/InputInfo";
import Button from "../components/Button/Button";
import { db, auth } from "../config/firebase";
import { collection, query, where, getDocs } from "firebase/firestore";
import { doc, updateDoc } from "firebase/firestore";

let idUser = "";

const Profile = () => {
    const navigation = useNavigation();

    const [nom, setNom] = useState("");
    const [prenom, setPreNom] = useState("");
    const [email, setEmail] = useState("");

    const [etat, setEtat] = useState(true);

    const [loading, setLoading] = useState(true);

    useLayoutEffect(() => {
        navigation.setOptions({
            headerStyle: {
                backgroundColor: "#2966e3",
                color: "white",
            },
            headerTintColor: "white",
        });
    }, [navigation]);

    useEffect(() => {
        const mailUser = auth.currentUser?.email;
        setEmail(() => auth.currentUser?.email);
        const fetchDataUser = async () => {
            try {
                const q = query(
                    collection(db, "users"),
                    where("Email", "==", mailUser)
                );
                const queryResult = await getDocs(q);

                if (!queryResult.empty) {
                    const data = queryResult.docs[0].data();
                    console.log(data);
                    idUser = queryResult.docs[0].id;

                    if (data !== null) {
                        setNom(() => data.Nom);
                        setPreNom(() => data.Prenom);
                    }
                } else {
                    console.log(`User ${mailUser} doesn't have any data`);
                }
            } catch (e) {
                // alert(e.message);
                console.error("Error fetching user data: ", error);
            } finally {
                setLoading(false);
            }
        };

        fetchDataUser();
    }, [etat]);

    const handelPress = async () => {
        setEtat((e) => !e);

        // // mise à jour des informations  :
        try {
            const docUserRed = doc(db, "users", idUser);
            await updateDoc(docUserRed, {
                Email: email,
                Nom: nom,
                Prenom: prenom,
            });
            console.log("User profile updated successfully!");
        } catch (e) {
            console.error("Error upadting document: ", e);
        }
    };

    const handelCancel = () => {
        setEtat((e) => !e);
    };

    if (loading) {
        return (
            <View style={styles.container}>
                <Text style={styles.modifTxt}>wait a fews secondes</Text>
            </View>
        );
    } else {
        return (
            <View style={styles.container}>
                {etat === true ? (
                    ""
                ) : (
                    <Text style={styles.modifTxt}>
                        vous pouvez changer vos informations
                    </Text>
                )}
                <InputInfo
                    label="Nom"
                    info={nom}
                    setInfo={setNom}
                    editable={!etat}
                />
                <InputInfo
                    label="Prenom"
                    info={prenom}
                    setInfo={setPreNom}
                    editable={!etat}
                />
                <InputInfo
                    label="Email"
                    info={email}
                    setInfo={setEmail}
                    editable={!etat}
                />
                {etat && (
                    <Button
                        title={"Modifier"}
                        handelOnPress={() => setEtat(!etat)}
                    />
                )}
                {!etat && (
                    <View style={styles.viewBtns}>
                        <Button title={"Valider"} handelOnPress={handelPress} />
                        <Button
                            title={"Annuler"}
                            handelOnPress={handelCancel}
                        />
                    </View>
                )}
            </View>
        );
    }
};

export default Profile;

const styles = StyleSheet.create({
    container: {
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
        paddingTop: 30,
    },
    modifTxt: {
        fontSize: 15,
        fontWeight: "500",
        color: "#43659f",
    },
    viewBtns: {
        width: "100%",
    },
});
