import React, { createContext, useContext } from "react";
import { View, FlatList } from "react-native";
import EventsContext from "./EventsContext";
import Styles from "./Styles";
import { Reservation } from "./Events";

export default props => {
    const {state} = useContext(EventsContext)
    const reservations = props.route.params.item.reservations
    const event = props.route.params.item

    return(
        <View style={[Styles.tela, { backgroundColor: "#fff" }]}>
            <FlatList data={reservations}
            renderItem={({item}) => <Reservation item={item} event={event} navigation={props.navigation}/>}
            keyExtractor={item => item.id}
            />
        </View>
    )
}