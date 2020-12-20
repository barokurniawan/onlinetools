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

    theme_input: {
        width: 250,
        marginBottom: 20,
        borderWidth: 1,
        height: 40,
        textAlign: 'center',
        borderColor: '#bdbdbd',
        color: '#616161'
    },

    list_view: {
        padding: 10,
        borderBottomColor: '#d0d0d0',
        borderBottomWidth: 1,
        borderTopColor: '#ffffff',
        borderTopWidth: 1,
    },

    item_label: {
        marginBottom: 5,
        color: '#757575'
    },

    item_description: {
        color: '#424242'
    },

});

export default MainStyle;