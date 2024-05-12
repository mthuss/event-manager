import React from "react";
import { SafeAreaView, Text, TouchableOpacity, View, Image} from "react-native";
import Styles from "./Styles";
import Ionicons from "react-native-vector-icons/Ionicons";

export default Events = [
    {
        id: Math.random(),
        name: "Hail the Sun Live",
        date: new Date().toString(),
        avatarUrl: "https://reactnative.dev/img/tiny_logo.png",
        location: "A Caverna",
        description: "AAAAAAAAAA",
        available: 50,
        favorited: true,
    },
    {
        id: Math.random(),
        name: "Dance Gavin Dance Interior de São Paulo Tour",
        date: new Date().toString(),
        avatarUrl: "https://reactnative.dev/img/tiny_logo.png",
        location: "Vila Dionísio",
        description: "BBBBBBBBB",
        available: 60,
        favorited: true,
    },
    {
        id: Math.random(),
        name: "Godspeed You! Black Emperor Revival Show",
        date: new Date().toString(),
        avatarUrl: "https://mthuss.github.io/files/cave.png",
        location: "Teatro Paulo Moura",
        description: "CCCCCCCCCCCCC",
        available: 45,
        favorited: false,
    },
    {
        id: Math.random(),
        name: "Bring Me the Horizon w/ Zé Maguinho do Piauí",
        date: new Date().toString(),
        avatarUrl: "https://reactnative.dev/img/tiny_logo.png",
        location: "Bar do Dito",
        description: "DDDDDDDDDDDDD",
        available: 20,
        favorited: false,
    },

]

//for prettier inline boldening of text
const Bold = props => (
    <Text style={{fontWeight: "bold"}}>
        {props.children}
    </Text>
)
defaultProps = {
    editable: false,
}
export const Event = ({ item, onPress, editable = false}) => {
    return (
        <TouchableOpacity style={[Styles.EventCard, { flexDirection: "row" }]} onPress={onPress}>
            <Image style={Styles.Icon} source={{ uri: item.avatarUrl ? item.avatarUrl : null }} />
            <View style={{ marginLeft: 10 }}>
                <Text style={{ fontWeight: 'bold' }}>{item.name}</Text>
                {/* <Text>{item.description && item.description}</Text> */}
                <Text><Bold>Local: </Bold>{item.location}</Text>
                <Text><Bold>Data: </Bold>{item.date}</Text>
            </View>
            {editable && //extra section that will show up on the manager screen
            //botar um burger menu aqui com "edit" e "delete"
            //trocar esse "position: absolute" por algo melhor
            <View style={{justifyContent: "center", alignContent: "center", position: "absolute", right: 20, top: 32,}}><Ionicons name="pencil" size={16}/></View>}
        </TouchableOpacity>)
}

