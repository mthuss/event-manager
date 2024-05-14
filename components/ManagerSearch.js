import React, { useContext, useState } from "react";
import { TextInput, Alert, FlatList, Text, TouchableOpacity, View } from "react-native";
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
    const [query, setQuery] = useState("")
    const [filteredList, setFilteredList] = useState(sortedList)

    function handleTextChange(query){
        setQuery(query)
        setFilteredList(sortedList.filter(item => (item.name.includes(query) || item.location.includes(query))))
    }
    return (
        <View style={[Styles.tela, { backgroundColor: '#fff' }]}>
            <View style={{margin:10}}>
            <TextInput fontSize={16} paddingLeft={6} placeholder="Pesquisar" onChangeText={handleTextChange} value={query} />
            </View>
            <FlatList data={filteredList}
                renderItem={({ item }) => <Event item={item} navigation={props.navigation} editable />}
                keyExtractor={(item) => item.id}
                onEndReached={() => setReachedEnd(true)}
                onStartReached={() => setReachedEnd(false)}
                onEndReachedThreshold={0.1}
            />
        </View>)
}