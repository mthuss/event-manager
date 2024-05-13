import { ScrollView, Image, View, Text } from "react-native"
import Styles, { Bold, colors } from "./Styles"
import { StyleSheet } from "react-native"
import { Button } from "@rneui/base"

export default props => {
    const item = props.route.params.item
    return (
        <ScrollView style={{ flex: 1, padding: 16 }}>
            <View style={{justifyContent: "center", alignContent: "center", alignItems: "center", marginBottom: 26}}>
                <Image style={Styles.EventBanner} source={{ uri: item.pictureUrl ? item.pictureUrl : null }} />
                <Text style={{ fontSize: 32, marginTop: 16, textAlign: "center"}}><Bold>{item.name}</Bold></Text>
            </View>
            <View style={{
                borderBottomColor: 'black',
                borderBottomWidth: StyleSheet.hairlineWidth,
                marginLeft: 16,
                marginRight: 16,
            }}/>
            <Text style={Styles.CardHeader}><Bold>Descrição:</Bold></Text>
            <View style={[Styles.Card]}>
                <Text style={{fontSize: 18}}>{item.description}</Text>
            </View>
            <Text style={Styles.CardHeader}><Bold>Local: </Bold></Text>
            <View style={[Styles.Card]}>
                <Text style={{ fontSize: 18 }}>{item.location}</Text>
            </View>
            <Text style={Styles.CardHeader}><Bold>Data: </Bold></Text>
            <View style={[Styles.Card, {marginBottom: 32}]}>
                <Text style={{ fontSize: 18 }}>{String(item.date)}</Text>
            </View>
            <Button color={colors.primary} fontSize={16} radius={10} title="Reservar" onPress={()=>props.navigation.navigate("ReservationForm", {item: item})} />
            <View style={{alignItems: "center", marginTop: 8}}>
                <Text><Bold>{item.tickets} Disponíveis!</Bold></Text>
            </View>
        </ScrollView>
    )
}