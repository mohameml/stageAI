import { getEmail } from "./User";
import { db, auth } from "../config/firebase";
import {
    collection,
    query,
    where,
    getDocs,
    addDoc,
    doc,
    updateDoc,
} from "firebase/firestore";

//  fonction pour requper les mesures par jour

const getHeartRatePerDay = async () => {
    const mailUser = getEmail();
    let res = [];
    try {
        const q = query(
            collection(db, "mesures"),
            where("email", "==", mailUser)
        );
        const queryResult = await getDocs(q);

        if (!queryResult.empty) {
            const dataLen = queryResult.docs.length;
            for (let i = 0; i < dataLen; i++) {
                const { date, heartRate } = queryResult.docs[i].data();
                res.push({ date: date, heartRate: heartRate });
            }
        } else {
            console.log(`User ${mailUser} doesn't have any data`);
        }
    } catch (e) {
        console.error("Error fetching user data: ", e);
        // throw new Error("Error fetching user data: file User.js");
    }
    console.log(res);
    return res;
};

const tableDateMesure = (res) => {};

export { getHeartRatePerDay };
