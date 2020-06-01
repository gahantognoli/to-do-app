import { StyleSheet, Dimensions } from 'react-native';

const width = Dimensions.get('screen').width;

export default StyleSheet.create({
    formContainer: {
       marginTop: 10,
       padding: 10,
       alignItems: "center"
    },
    buttonContainer: {
        width: width*0.9,
    },
    inputContainer: {
        width: width*0.9,
    },
    input: {
        fontSize: 20
    }
});