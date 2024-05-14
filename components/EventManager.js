import React, { useContext, useState } from "react";
import { Alert, FlatList, Text, TouchableOpacity, View } from "react-native";
import Styles from "./Styles";
import {Event} from "./Events";
import EventsContext from "./EventsContext";
import Ionicons from "react-native-vector-icons/Ionicons"


export default props => {
    const {state,dispatch} = useContext(EventsContext)
    const [reachedEnd, setReachedEnd] = useState(false)
    const favoritesList = state.Events.filter(item => item.favorited === true)
    const remainderList = state.Events.filter(item => item.favorited === false)
    const sortedList = [...favoritesList, ...remainderList]

    function deleteAll(){
        Alert.alert("Deletar todos", "Deseja mesmo deletar todos os eventos?",[
            {text : "Não"},
            {text: "Sim", onPress: ()=>dispatch({type: 'deleteAllEvents'})}
        ])
    }

    return(
    <View style={[Styles.tela,{backgroundColor: '#fff'}]}>
        <FlatList data={sortedList}
            renderItem={({item}) => <Event item={item} navigation={props.navigation} editable/>}
            keyExtractor={(item) => item.id}
            onEndReached={() => setReachedEnd(true)}
            onStartReached={() => setReachedEnd(false)}
            onEndReachedThreshold={0.1}
        />
            {!reachedEnd &&
                <>
                    <TouchableOpacity style={Styles.FloatingButton} onPress={() => props.navigation.navigate("AddEvent")}>
                        <Ionicons name="add" size={32} color={"white"} />
                    </TouchableOpacity>
                    <TouchableOpacity style={[Styles.FloatingButton, {right: 85}]} onPress={()=>deleteAll()}>
                        <Ionicons name="trash" size={32} color={"white"} />
                    </TouchableOpacity>
                    <TouchableOpacity style={[Styles.FloatingButton, {right: 150}]} onPress={()=>props.navigation.navigate("Search")}>
                        <Ionicons name="search" size={32} color={"white"} />
                    </TouchableOpacity>
                </>
            }
        </View>)
}