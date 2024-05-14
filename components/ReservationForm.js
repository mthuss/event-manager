import { ScrollView, View, Text, Image, StyleSheet, TextInput, Alert } from "react-native"
import { Bold, colors } from "./Styles"
import { useContext, useState } from "react"
import { Button } from "@rneui/base"
import EventsContext from "./EventsContext"

export default props => {
    const item = props.route.params.item
    const [userInput, setUserInput] = useState("")
    const [CPF, setCPF] = useState("")
    const [numTickets, setNumTickets] = useState("")
    const {dispatch} = useContext(EventsContext)

    function AddReservation(){
        //check for valid ticket reservation number
        if(numTickets > item.tickets)
            Alert.alert("Número inválido","O número de ingressos requisitado é maior do que o disponível. Por favor tente novamente.",[{text: "OK"}])
        else if(numTickets == 0 || CPF == "" || userInput == "")
            Alert.alert("Campos inválidos", "Um ou mais campos foram deixados em branco. Por favor preencha todos.", [{text: "OK"}])
        else{
            dispatch({
                type: 'addReservation',
                payload: {
                    item: item,
                    reservationData: {
                        id: Math.random(),
                        username: userInput,
                        cpf: CPF,
                        numTickets: Number(numTickets)
                    }
                }
            })
            props.navigation.goBack()
        }
    }
    return (
        <ScrollView style={{ flex: 1, padding: 16 }}>
            <View style={{ justifyContent: "center", alignContent: "center", alignItems: "center", marginBottom: 14 }}>
                <Image style={Styles.EventBanner} source={{ uri: item.pictureUrl ? item.pictureUrl : null }} />
                <Text style={{ fontSize: 32, marginTop: 16, textAlign: "center" }}><Bold>{item.name}</Bold></Text>
                <Text style={{ marginTop: 8 }}><Bold>Reserva</Bold></Text>
            </View>
            <View style={{
                borderBottomColor: 'black',
                borderBottomWidth: StyleSheet.hairlineWidth,
                marginLeft: 16,
                marginRight: 16,
                marginBottom: 20
            }} />
            <View style={{ padding: 16 }}>
                <View>
                    <Text style={{ marginBottom: 5, fontSize: 16 }}><Bold>Nome completo: </Bold></Text>
                    <View style={Styles.InputBox}>
                        <TextInput fontSize={16} paddingLeft={6} placeholder="Nome" onChangeText={setUserInput} value={userInput} />
                    </View>
                </View>
                <View>
                    <Text style={{ marginBottom: 5, fontSize: 16 }}><Bold>CPF: </Bold></Text>
                    <View style={Styles.InputBox}>
                        <TextInput fontSize={16} paddingLeft={6} placeholder="CPF" onChangeText={setCPF} value={CPF} inputMode="numeric" />
                    </View>
                </View>
                <View style={{ flexDirection: "row", alignContent: "center", alignContent: "center", alignItems: "center", marginTop: 5 }}>
                    <Text style={{ marginBottom: 5, fontSize: 16 }}><Bold>Número de ingressos: </Bold></Text>
                    <View style={Styles.InputBox}>
                        <TextInput fontSize={16} textAlign="center" placeholder="0" onChangeText={setNumTickets} value={numTickets} inputMode="numeric" />
                    </View>
                    <Text style={{ fontSize: 16 }}><Bold> / {item.tickets}</Bold></Text>
                </View>
                <View style={{ marginTop: 5 }}>
                    <Button color={colors.primary} title={"Reservar"} radius={10} onPress={AddReservation} />
                </View>
            </View>
        </ScrollView>
    )
}