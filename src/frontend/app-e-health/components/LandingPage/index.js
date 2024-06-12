import { View, Image, Text, Pressable } from "react-native";
import styles from "./styles";

function LandigPage() {
    return (
        <View style={styles.container}>
            <Image
                source={require("../../assets/images/cardiogram.png")}
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
        </View>
    );
}

export default LandigPage;
