import { StyleSheet, Text, View, Button, FlatList } from "react-native";
import React from "react";
import requestBluetoothPermission from "../config/bluetooth";
import { useEffect, useState } from "react";
import { BleManager } from "react-native-ble-plx";

const Bluetooth = () => {
    const [devices, setDevices] = useState([]);
    const [manager, setManager] = useState(null);

    useEffect(() => {
        const blemanager = new BleManager();
        setManager(blemanager);

        return () => {
            blemanager.destroy();
        };
    }, []);

    const scanForDevices = async () => {
        const permissionGranted = await requestBluetoothPermission();
        if (!permissionGranted) {
            console.error("BLE Manager not initialized");
            return;
        }

        setDevices([]);
        manager.startDeviceScan(null, null, (error, device) => {
            if (error) {
                console.error(error);
                return;
            }
            if (device && !devices.some((d) => d.id === device.id)) {
                setDevices((prevDevices) => [...prevDevices, device]);
            }
        });

        setTimeout(() => {
            manager.stopDeviceScan();
        }, 5000);
    };

    return (
        <View style={styles.container}>
            <Button title="Scan for Devices" onPress={scanForDevices} />
            <FlatList
                data={devices}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <Text>{item.name ? item.name : "Unnamed Device"}</Text>
                )}
            />
        </View>
    );
};

export default Bluetooth;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 10,
    },
});
