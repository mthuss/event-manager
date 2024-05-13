import { StyleSheet } from "react-native";

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
    },
    Icon: {
        borderStyle: 'solid', 
        borderWidth: 1, 
        borderRadius: 50,
        height: 50, 
        width: 50
    },
    FloatingButton: {
        borderRadius: 50,
        height: 50,
        width: 50,
        backgroundColor: "orange",
        justifyContent: "center",
        alignItems: "center",
        position: "absolute",
        bottom: 20,
        right: 20,
    },
})