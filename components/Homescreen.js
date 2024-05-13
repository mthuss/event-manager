import React, { useContext } from "react";
import { FlatList, Text, View } from "react-native";
import Styles from "./Styles";
import {Event} from "./Events";
import EventsContext from "./EventsContext";

export default props => {
    const {state} = useContext(EventsContext)

    return(
    <View style={[Styles.tela,{backgroundColor: '#fff'}]}>
        {/* <Text>Home</Text> */}
        <FlatList data={state.Events}
            renderItem={({item}) => <Event item={item}/>}
            keyExtractor={(item) => item.id}
        />
    </View>)
}