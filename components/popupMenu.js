import { Menu, MenuOption, MenuOptions, MenuTrigger } from "react-native-popup-menu";
import { View, Text, Alert } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons"
import { useContext } from "react";
import EventsContext from "./EventsContext";


export default props => {
    const { dispatch } = useContext(EventsContext)
    return (
        <View>
            <Menu>
                <MenuTrigger style={{padding: 16}}>
                    <Ionicons name="ellipsis-vertical" size={16} />
                </MenuTrigger>
                <MenuOptions customStyles={{
                    optionsContainer: {
                        borderRadius: 10,
                        marginTop: 30,
                        marginLeft: 0,
                        maxWidth: 130,
                        padding: 8
                    }
                }}>
                    <MenuOption style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between" }} onSelect={()=>props.navigation.navigate("EditEvent", {item: props.item} )}>
                        <Text style={{ fontSize: 18 }}>Editar</Text>
                        <Ionicons name="pencil-outline" size={16} />
                    </MenuOption>
                    <MenuOption 
                        style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between" }} 
                        onSelect={() => {
                            Alert.alert("Confirmar deleção", "Deseja mesmo apagar este evento?", [
                                { text: "Não" },
                                {
                                    text: "Sim", onPress: () => dispatch({
                                        type: 'deleteEvent',
                                        payload: { ...props.item }
                                    })
                                }])
                        }}>
                        <Text style={{ fontSize: 18 }}>Apagar</Text>
                        <Ionicons name="trash-outline" size={16} />
                    </MenuOption>
                    <MenuOption style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between" }} onSelect={() => dispatch({ type: 'updateEvent', payload: { ...props.item, favorited: !props.item.favorited } })}>
                        <Text style={{ fontSize: 18 }}>Favoritar</Text>
                        <Ionicons name="star-outline" size={16} />
                    </MenuOption>
                    <MenuOption style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between" }} onSelect={() => props.navigation.navigate("ReservationsList", { item: props.item })}>
                        <Text style={{ fontSize: 18 }}>Reservas</Text>
                        <Ionicons name="list-outline" size={16} />
                    </MenuOption>
                </MenuOptions>
            </Menu>
        </View >
    )
}