import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "./Home";
import Profile from "./Profile";
import { AntDesign } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import HomeHeadr from "../components/HomeHeader/HomeHeadr";
import { FontAwesome } from "@expo/vector-icons";
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
        return <HomeHeadr />;
    },
};

const homeOptions = {
    tabBarIcon: ({ color, size }) => {
        return <Entypo name="home" size={size} color={color} />;
    },
};

const profileOptions = {
    tabBarIcon: ({ color, size }) => {
        return <FontAwesome name="user" size={size} color={color} />;
    },
};

export default HomeTab;
