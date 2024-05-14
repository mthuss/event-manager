import React, { useContext } from "react";
import { FlatList, Text, View } from "react-native";
import Styles from "./Styles";
import {Event} from "./Events";
import EventsContext from "./EventsContext";

export default props => {
    const {state} = useContext(EventsContext)
    const favoritesList = state.Events.filter(item => item.favorited === true)
    const remainderList = state.Events.filter(item => item.favorited === false)
    const sortedList = [...favoritesList, ...remainderList]

    return(
    <View style={{backgroundColor: '#fff', justifyContent: "center", flex: 1}}>
        <FlatList data={sortedList}
            renderItem={({item}) => <Event item={item} navigation={props.navigation}/>}
            keyExtractor={(item) => item.id}
        />
    </View>)
}