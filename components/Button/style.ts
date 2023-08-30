import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    button: {
        width: 64,
        height: 64,
        borderRadius: 32,
        justifyContent: 'center',
        backgroundColor: '#1f1c25',
        shadowColor: '#000', 
        shadowOffset: {
            width: 0,
            height: -0
        },
        shadowOpacity: 0.1,
    },
    buttonOperation: {
        width: 64,
        height: 64,
        backgroundColor: '#462878',
        borderRadius: 32,
        shadowColor: '#000', 
        shadowOffset: {
            width: 0,
            height: -0
        },
        shadowOpacity: 0.1,
        justifyContent: 'center'
    },
    buttonCalculator: {
        width: 64,
        height: 64,
        backgroundColor: '#462878',
        borderRadius: 32,
        shadowColor: '#000', 
        shadowOffset: {
            width: 0,
            height: -0
        },
        shadowOpacity: 0.1,
        justifyContent: 'center'
    },
    buttonTitleFunction: {
        color: '#975dfa',
        fontSize: 23,
        textAlign: 'center'
    }, 
    buttonTitle: {
        color: '#fff',
        fontSize: 23,
        textAlign: 'center'
    }
})