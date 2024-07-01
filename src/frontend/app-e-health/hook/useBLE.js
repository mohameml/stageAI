import { useMemo, useState } from "react";
import { BleManager, Device } from "react-native-ble-plx";

import { Platform, PermissionsAndroid } from "react-native";

function useBLE() {
    const bleManager = useMemo(() => new BleManager(), []);

    const [allDevices, setAllDevices] = useState([]);
    const [connectedDevice, setConnectedDevice] = useState(null);

    const requestBluetoothPermission = async () => {
        if (Platform.OS === "ios") {
            return true;
        }
        if (
            Platform.OS === "android" &&
            PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION
        ) {
            const apiLevel = parseInt(Platform.Version.toString(), 10);

            if (apiLevel < 31) {
                const granted = await PermissionsAndroid.request(
                    PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION
                );
                return granted === PermissionsAndroid.RESULTS.GRANTED;
            }
            if (
                PermissionsAndroid.PERMISSIONS.BLUETOOTH_SCAN &&
                PermissionsAndroid.PERMISSIONS.BLUETOOTH_CONNECT
            ) {
                const result = await PermissionsAndroid.requestMultiple([
                    PermissionsAndroid.PERMISSIONS.BLUETOOTH_SCAN,
                    PermissionsAndroid.PERMISSIONS.BLUETOOTH_CONNECT,
                    PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
                ]);

                return (
                    result["android.permission.BLUETOOTH_CONNECT"] ===
                        PermissionsAndroid.RESULTS.GRANTED &&
                    result["android.permission.BLUETOOTH_SCAN"] ===
                        PermissionsAndroid.RESULTS.GRANTED &&
                    result["android.permission.ACCESS_FINE_LOCATION"] ===
                        PermissionsAndroid.RESULTS.GRANTED
                );
            }
        }

        alert("Permission have not been granted");

        return false;
    };

    const isDuplicteDevice = (devices, nextDevice) =>
        devices.findIndex((device) => nextDevice.id === device.id) > -1;

    const scanForPeripherals = () =>
        bleManager.startDeviceScan(null, null, (error, device) => {
            if (error) {
                console.log(error);
            }
            // && device.name?.includes("CorSense")
            setAllDevices([]);
            if (device) {
                setAllDevices((prevState) => {
                    if (!isDuplicteDevice(prevState, device)) {
                        return [...prevState, device];
                    }
                    return prevState;
                });
            }
        });

    const connectToDevice = async (device) => {
        try {
            const deviceConnection = await bleManager.connectToDevice(
                device.id
            );
            setConnectedDevice(deviceConnection);
            await deviceConnection.discoverAllServicesAndCharacteristics();
            bleManager.stopDeviceScan();
            // startStreamingData(deviceConnection);
        } catch (e) {
            console.log("FAILED TO CONNECT , ERROR : ", e);
        }
    };

    return {
        requestBluetoothPermission,
        scanForPeripherals,
        allDevices,
        connectToDevice,
        connectedDevice,
    };
}

export default useBLE;
