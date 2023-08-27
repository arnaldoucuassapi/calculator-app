import { StyleSheet, Dimensions } from "react-native";

const screenWidth = Dimensions.get('window').width;

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: screenWidth,
        backgroundColor: '#2d2a37',
        paddingVertical: 54,
        paddingHorizontal: 32,
        gap: 26
    },
    expressions: {
        color: '#6b6b6b',
        fontSize: 23,
        letterSpacing: 2,
        textAlign: 'right',
    },
    resultContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center'
    }, 
    equalOperator: {
        color: '#6b6b6b',
        fontSize: 23
    },
    total: {
        flex: 1,
        color: '#fff',
        fontSize: 36,
        textAlign: 'right'
    },
    main: {
        flex: 1,
        justifyContent: 'center',
        gap: 20,
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    }
});