import Homescreen from "./Homescreen"
import EventManager from "./EventManager"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";

const Tab = createBottomTabNavigator()

export default props => {
    return (
        <Tab.Navigator 
            screenOptions={{
                tabBarActiveTintColor: 'red',
                tabBarInactiveTintColor: 'blue',
                tabBarLabelStyle: { fontSize: 16 },
                tabBarStyle: {height: 64},
            }}
            initialRouteName="Gerenciador">
            <Tab.Screen name="Eventos" component={Homescreen}
            options={{tabBarIcon: ({color, size}) => (<Ionicons name="calendar-outline" color={color} size={size}/>)}}/>
            <Tab.Screen name="Gerenciador" component={EventManager}
            options={{tabBarIcon: ({color, size}) => (<Ionicons name="create-outline" color={color} size={size}/>)}}/>
        </Tab.Navigator>
    )
}