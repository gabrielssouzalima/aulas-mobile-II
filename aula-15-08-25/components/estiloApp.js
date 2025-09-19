import { StyleSheet } from "react-native";
const estilo = StyleSheet.create({
    superior:{
        fontSize: 26,
        fontWeight: 'bold',
        marginBottom: 20,
        marginTop: 40,
        textAlign: 'center',
    },

    container:{
        backgroundColor: '#f4f5f9',
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between',
        paddingBottom: 25,
        paddingLeft: 10,
        paddingRight: 10,
        paddingTop: 10,
    },
    item: {
        backgroundColor:'#fff',
        flex: 1,
        marginBottom: 10,
        marginRight: 10,
        paddingLeft: 10,
        paddingRight: 10,
        paddingTop: 10,
        marginTop: 10,
        textAlign: 'center',
        paddingVertical: 10,
    },
})
export default estilo;