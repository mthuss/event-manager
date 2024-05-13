import { View, ScrollView, Text, TextInput, TouchableHighlight } from "react-native"
import Styles from "./Styles"
import { useContext, useState } from "react"
import EventsContext from "./EventsContext"
import { Bold, colors } from "./Styles"
import { Button } from "@rneui/base"
import moment from 'moment'
import { DateTimePickerAndroid } from "@react-native-community/datetimepicker"

export default props => {
    const item = props.route.params.item ? props.route.params.item : null
    const { state, dispatch } = useContext(EventsContext)
    const [userInput, setUserInput] = useState(item.name)
    const [description, setDescription] = useState(item.description)
    const [tickets, setTickets] = useState(String(item.tickets))
    const [location, setLocation] = useState(item.location)
    const [pictureUrl, setPictureUrl] = useState(item.pictureUrl)
    const [date, setDate] = useState(moment(item.date,'ddd, D [de] MMMM [de] YYYY').toDate())

    function EditEvent() {
        dispatch({
            type: 'updateEvent',
            payload: {
                id: item.id,
                name: userInput,
                description: description,
                tickets: Number(tickets),
                location: location,
                pictureUrl: pictureUrl,
                date: moment(date).format('ddd, D [de] MMMM [de] YYYY'),
                favorited: item.favorited,
            }
        })
    }

    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate
        setDate(currentDate)
    }

    const showDatepicker = () => {
        DateTimePickerAndroid.open({
            value: date,
            onChange,
            mode: 'date',
        });
    }

    return (
        <ScrollView style={{ flex: 1, padding: 32 }}>
            <Text style={{ textAlign: "center", fontSize: 32, marginBottom: 42 }}><Bold>Adicionar Evento</Bold></Text>
            <View>
                <Text style={{ marginBottom: 5, fontSize: 16 }}><Bold>Nome: </Bold></Text>
                <View style={Styles.InputBox}>
                    <TextInput fontSize={16} paddingLeft={6} placeholder="Meu evento maneiro" onChangeText={setUserInput} value={userInput} />
                </View>
            </View>

            <View>
                <Text style={{ marginBottom: 5, fontSize: 16 }}><Bold>Descrição: </Bold></Text>
                <View style={[Styles.InputBox, { height: 100 }]}>
                    <TextInput textAlignVertical="center" multiline fontSize={16} paddingLeft={6} placeholder="Descrição" onChangeText={setDescription} value={description} />
                </View>
            </View>

            <View>
                <Text style={{ marginBottom: 5, fontSize: 16 }}><Bold>Local: </Bold></Text>
                <View style={Styles.InputBox}>
                    <TextInput textAlignVertical="center" multiline fontSize={16} paddingLeft={6} placeholder="Local" onChangeText={setLocation} value={location} />
                </View>
            </View>

            <View>
                <Text style={{ marginBottom: 5, fontSize: 16 }}><Bold>Imagem: </Bold></Text>
                <View style={Styles.InputBox}>
                    <TextInput textAlignVertical="center" multiline fontSize={16} paddingLeft={6} placeholder="URL da Imagem" onChangeText={setPictureUrl} value={pictureUrl} />
                </View>
            </View>

            <View style={{ flexDirection: "row", alignContent: "center", alignContent: "center", alignItems: "center", marginTop: 5 }}>
                <Text style={{ marginBottom: 5, fontSize: 16 }}><Bold>Ingressos disponíveis: </Bold></Text>
                <View style={Styles.InputBox}>
                    <TextInput fontSize={16} textAlign="center" placeholder="0" onChangeText={setTickets} value={tickets} inputMode="numeric" />
                </View>
            </View>

            <View style={{ flexDirection: "row", alignContent: "center", alignContent: "center", alignItems: "center", marginTop: 5 }}>
                <Text style={{ marginBottom: 5, fontSize: 16 }}><Bold>Data: </Bold></Text>
                <TouchableHighlight style={[Styles.InputBox, { flex: 1 }]} onPress={showDatepicker}>
                    <Text>{moment(date).format('ddd, D [de] MMMM [de] YYYY')}</Text>
                </TouchableHighlight>
            </View>

            <View style={{ marginTop: 5 }}>
                <Button color={colors.primary} title={"Salvar"} radius={10} onPress={() => { EditEvent(); props.navigation.goBack() }} />
            </View>
        </ScrollView>
    )
}