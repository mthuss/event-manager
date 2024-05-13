import React, { useContext, useState } from "react";
import { FlatList, Text, TouchableOpacity, View } from "react-native";
import Styles from "./Styles";
import {Event} from "./Events";
import EventsContext from "./EventsContext";
import Ionicons from "react-native-vector-icons/Ionicons"


export default props => {
    const {state,dispatch} = useContext(EventsContext)
    const [reachedEnd, setReachedEnd] = useState(false)

    return(
    <View style={[Styles.tela,{backgroundColor: '#fff'}]}>
        <FlatList data={state.Events}
            renderItem={({item}) => <Event item={item} editable/>}
            keyExtractor={(item) => item.id}
            onEndReached={() => setReachedEnd(true)}
            onStartReached={() => setReachedEnd(false)}
            onStartReachedThreshold={0.9}
        />
        {!reachedEnd &&
        <TouchableOpacity style={Styles.FloatingButton} onPress={() => props.navigation.navigate("AddEvent")}>
            <Ionicons name="add" size={32} color={"white"}/>
        </TouchableOpacity>
        }
    </View>)
}