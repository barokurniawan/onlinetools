import { StyleSheet } from 'react-native';

const MainStyle = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    header: {
        backgroundColor: '#f50057',
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
    },
    header_text: {
        color: 'white',
        fontSize: 30
    },
    button_submit: {
        color: 'black',
        fontSize: 11,
        marginTop: 20
    },
});

export default MainStyle;