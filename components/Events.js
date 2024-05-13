import React, { useContext } from "react";
import { SafeAreaView, Text, TouchableOpacity, View, Image} from "react-native";
import Styles from "./Styles";
import Ionicons from "react-native-vector-icons/Ionicons";
import { Bold } from "./Styles";
import EventsContext from "./EventsContext";
import PopupMenu from "./popupMenu";

defaultProps = {
    editable: false,
}

export const Event = ({ item, onPress, editable = false, navigation }) => {
    const { dispatch } = useContext(EventsContext)

    if (editable)
        return (
            <View style={[Styles.EventCard, { flexDirection: "row" }]} onPress={onPress}>
                <Image style={Styles.Icon} source={{ uri: item.pictureUrl ? item.pictureUrl : null }} />
                <View style={{ marginLeft: 10 }}>
                    <Text style={{ fontWeight: 'bold' }}>{item.name} {item.favorited && <Ionicons name="star"/>}</Text>
                    <Text><Bold>Local: </Bold>{item.location}</Text>
                    <Text><Bold>Data: </Bold>{item.date}</Text>
                    <Text><Bold>Ingressos disponíveis: </Bold>{item.tickets}</Text>
                </View>
                {/*extra section that will show up on the manager screen
                botar um burger menu aqui com "edit" e "delete"
                trocar esse "position: absolute" por algo melhor*/}
                <View style={{ justifyContent: "center", alignContent: "center", position: "absolute", right: 0, alignItems: "center"}}><PopupMenu item={item} navigation={navigation}/></View>
            </View>
        )
    else
        return (
            <TouchableOpacity style={[Styles.EventCard, { flexDirection: "row" }]} onPress={onPress}>
                <Image style={Styles.Icon} source={{ uri: item.pictureUrl ? item.pictureUrl : null }} />
                <View style={{ marginLeft: 10 }}>
                    <Text style={{ fontWeight: 'bold' }}>{item.name} {item.favorited && <Ionicons name="star" color={"#ffbf00"}/>}</Text>
                    <Text><Bold>Local: </Bold>{item.location}</Text>
                    <Text><Bold>Data: </Bold>{item.date}</Text>
                    <Text><Bold>Ingressos disponíveis: </Bold>{item.tickets}</Text>
                </View>
            </TouchableOpacity>
        )
}

