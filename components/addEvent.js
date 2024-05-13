import { View, ScrollView, Text, TextInput } from "react-native"
import Styles from "./Styles"
import { useContext, useState } from "react"
import EventsContext from "./EventsContext"
import { Bold, colors } from "./Styles"
import { Button } from "@rneui/base"

export default props => {
    const { state, dispatch } = useContext(EventsContext)
    const [userInput, setUserInput] = useState("")
    const [description, setDescription] = useState("")
    const [tickets, setTickets] = useState("")
    const [location, setLocation] = useState("")
    const [pictureURL, setPictureURL] = useState("")

    function AddUser() {

    }

    return(
        <ScrollView style={{flex: 1, padding: 32}}>
            <Text style={{textAlign: "center", fontSize: 32, marginBottom: 42}}><Bold>Adicionar Evento</Bold></Text>
            <View>
                <Text style={{marginBottom: 5, fontSize: 16}}><Bold>Nome: </Bold></Text>
                <View style={Styles.InputBox}>
                    <TextInput fontSize={16} textAlign="center" placeholder="Meu evento maneiro" onChangeText={setUserInput} value={userInput}/>
                </View>
            </View>

            <View>
                <Text style={{marginBottom: 5, fontSize: 16}}><Bold>Descrição: </Bold></Text>
                <View style={[Styles.InputBox, {height: 100}]}>
                    <TextInput textAlignVertical="center" multiline fontSize={16} textAlign="center" placeholder="Descrição" onChangeText={setDescription} value={description}/>
                </View>
            </View>

            <View>
                <Text style={{marginBottom: 5, fontSize: 16}}><Bold>Local: </Bold></Text>
                <View style={Styles.InputBox}>
                    <TextInput textAlignVertical="center" multiline fontSize={16} textAlign="center" placeholder="Local" onChangeText={setLocation} value={location}/>
                </View>
            </View>

            <View>
                <Text style={{marginBottom: 5, fontSize: 16}}><Bold>Imagem: </Bold></Text>
                <View style={Styles.InputBox}>
                    <TextInput textAlignVertical="center" multiline fontSize={16} textAlign="center" placeholder="URL da Imagem" onChangeText={setPictureURL} value={pictureURL}/>
                </View>
            </View>

            <View style={{flexDirection: "row", alignContent: "center", alignContent: "center", alignItems: "center", marginTop: 5}}>
                <Text style={{marginBottom: 5, fontSize: 16}}><Bold>Ingressos disponíveis: </Bold></Text>
                <View style={Styles.InputBox}>
                    <TextInput fontSize={16} textAlign="center" placeholder="0" onChangeText={setTickets} value={tickets} inputMode="numeric"/>
                </View>
            </View>

            <View style={{ marginTop: 5 }}>
                <Button color={colors.primary} title={"Salvar"} radius={10} onPress={() => {console.warn(Number(tickets))}} />
            </View>
        </ScrollView>
    )
}