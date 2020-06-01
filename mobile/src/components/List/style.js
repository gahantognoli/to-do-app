import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    checkboxContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 15
    },
    textTask: {
        fontSize: 20
    },
    done: {
        textDecorationLine: "line-through",
        color: '#bbb'
    },
    undone: {
        textDecorationLine: "none",
        color: '#000'
    }
})
