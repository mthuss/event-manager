import React, { useContext } from "react";
import { FlatList, Text, Touchable, TouchableOpacity, View } from "react-native";
import Styles from "./Styles";
import {Event} from "./Events";
import EventsContext from "./EventsContext";
import Ionicons from "react-native-vector-icons/Ionicons"
import { createNativeStackNavigator } from "@react-navigation/native-stack";


export default props => {
    const {state,dispatch} = useContext(EventsContext)

    return(
    <View style={[Styles.tela,{backgroundColor: '#fff'}]}>
        {/* <Text>Home</Text> */}
        <FlatList data={state.Events}
            renderItem={({item}) => <Event item={item} editable/>}
            keyExtractor={(item) => item.id}
        />
        <TouchableOpacity style={Styles.FloatingButton} onPress={() => props.navigation.navigate("AddEvent")}>
            <Ionicons name="add" size={32} color={"white"}/>
        </TouchableOpacity>
    </View>)
}