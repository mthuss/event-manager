import Homescreen from "./Homescreen"
import EventManager from "./EventManager"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AddEvent from "./addEvent";
import EditEvent from "./editEvent"
import { colors } from "./Styles";

const Tab = createBottomTabNavigator()
const ManagerStack = createNativeStackNavigator()

const Manager = () => (
    <ManagerStack.Navigator initialRouteName="Manager" screenOptions={{ headerShown: false }}>
        <ManagerStack.Screen name="Manager" component={EventManager}/>
        <ManagerStack.Screen name="AddEvent" component={AddEvent}/>
        <ManagerStack.Screen name="EditEvent" component={EditEvent}/>
    </ManagerStack.Navigator>
)

export default props => {
    return (
        <Tab.Navigator 
            screenOptions={{
                tabBarActiveTintColor: colors.primary,
                tabBarInactiveTintColor: 'gray',
                tabBarLabelStyle: { fontSize: 16 },
                tabBarStyle: {height: 64},
            }}
            initialRouteName="Eventos">
            <Tab.Screen name="Eventos" component={Homescreen}
            options={{tabBarIcon: ({color, size}) => (<Ionicons name="calendar-outline" color={color} size={size}/>)}}/>
            <Tab.Screen name="Gerenciador" component={Manager}
            options={{tabBarIcon: ({color, size}) => (<Ionicons name="create-outline" color={color} size={size}/>)}}/>
        </Tab.Navigator>
    )
}