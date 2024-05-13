import { StyleSheet } from "react-native";
import { Text } from "@rneui/base";

//for prettier inline boldening of text
export const Bold = props => (
    <Text style={{fontWeight: "bold"}}>
        {props.children}
    </Text>
)

export const colors = {
    primary: "purple"
}

export default Styles = StyleSheet.create({
    tela: {
        flex: 1,
        justifyContent: "center",
        // alignItems: 'center',

    },
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    EventCard: {
        borderStyle: 'solid',
        borderWidth: 1,
        margin: 10,
        padding: 10,
        borderRadius: 10,
        alignItems: "center",
    },
    Icon: {
        borderStyle: 'solid', 
        borderWidth: 1, 
        borderRadius: 50,
        height: 50, 
        width: 50,
    },
    FloatingButton: {
        borderRadius: 50,
        height: 50,
        width: 50,
        backgroundColor: colors.primary,
        justifyContent: "center",
        alignItems: "center",
        position: "absolute",
        bottom: 20,
        right: 20,
    },
    InputBox: {
        borderStyle: "solid",
        borderWidth: 1,
        padding: 8,
        borderRadius: 10,
        marginBottom: 5
    }
})
