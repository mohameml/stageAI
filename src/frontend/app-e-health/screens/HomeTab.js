import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "./Home";
import Profile from "./Profile";
import { AntDesign } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

const HomeTab = () => {
    return (
        <Tab.Navigator screenOptions={screenOptions}>
            <Tab.Screen name="Home" component={Home} options={homeOptions} />
            <Tab.Screen
                name="Profile"
                component={Profile}
                options={profileOptions}
            />
        </Tab.Navigator>
    );
};

const screenOptions = {
    headerRight: () => {
        return <AntDesign name="logout" size={24} color="black" />;
    },
};

const homeOptions = {
    tabBarIcon: ({ color, size }) => {
        return <Entypo name="home" size={size} color={color} />;
    },
};

const profileOptions = {
    tabBarIcon: ({ color, size }) => {
        return <AntDesign name="profile" size={size} color={color} />;
    },
};

export default HomeTab;
