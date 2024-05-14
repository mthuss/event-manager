import React, { useContext } from "react";
import { SafeAreaView, Text, TouchableOpacity, View, Image, Alert} from "react-native";
import Styles, { colors } from "./Styles";
import Ionicons from "react-native-vector-icons/Ionicons";
import { Bold } from "./Styles";
import EventsContext from "./EventsContext";
import PopupMenu from "./popupMenu";

// defaultProps = {
    // editable: false,
// }

export const Event = ({ item, onPress, editable = false, navigation }) => {
    const { dispatch } = useContext(EventsContext)

    if (editable)
        return (
            <View style={[Styles.EventCard, { flexDirection: "row" }]}>
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
            <TouchableOpacity style={[Styles.EventCard, { flexDirection: "row" }]} onPress={()=>navigation.navigate("EventInfo", {item: item})}>
                <Image style={Styles.Icon} source={{ uri: item.pictureUrl ? item.pictureUrl : null }} />
                <View style={{ marginLeft: 10 }}>
                    {/* <Text style={{ fontWeight: 'bold' }}>{item.name} {item.favorited && <Ionicons name="star" color={"#ffbf00"}/>}</Text> */}
                    <Text style={{ fontWeight: 'bold' }}>{item.name}</Text>
                    <Text><Bold>Local: </Bold>{item.location}</Text>
                    <Text><Bold>Data: </Bold>{item.date}</Text>
                    <Text><Bold>Ingressos disponíveis: </Bold>{item.tickets}</Text>
                </View>
                <TouchableOpacity
                    onPress={() => dispatch({ type: 'updateEvent', payload: { ...item, favorited: !item.favorited } })}
                    style={{ justifyContent: "center", alignContent: "center", position: "absolute", right: 0, alignItems: "center", padding: 16 }}>
                    <Ionicons name={item.favorited ? "star" : "star-outline"} size={24} color={item.favorited ? colors.favorited : "black"} />
                </TouchableOpacity>
            </TouchableOpacity>
        )
}


export const Reservation = ({item, event, navigation}) => {
    const { dispatch } = useContext(EventsContext)
    function confirmDeletion(reservation, event) {
        Alert.alert("Confirmar deleção", "Deseja mesmo deletar esta reserva?", [
            { text: "Cancelar" },
            { text: "OK", onPress: () => dispatch({ type: 'deleteReservation', payload: { reservation: reservation, event: event }}) },
        ])
    }

    return(
    <View style={[Styles.EventCard, { flexDirection: "row" }]}>
        <View style={{ marginLeft: 10 }}>
            <Text><Bold>Nome: </Bold>{item.username}</Text>
            <Text><Bold>CPF: </Bold>{item.cpf}</Text>
            <Text><Bold>Número de ingressos: </Bold>{item.numTickets}</Text>
        </View>
        <TouchableOpacity
            onPress={() => confirmDeletion(item, event)}
            style={{ justifyContent: "center", alignContent: "center", position: "absolute", right: 0, alignItems: "center", padding: 16 }}>
            <Ionicons name="trash-outline" size={24} />
        </TouchableOpacity>
    </View>
    )
}