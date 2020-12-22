import React from 'react';
import { Button, TextInput, View } from 'react-native';
import MainStyle from '../../style/MainStyle';
import SearchData from '../../context/SearchData'
import env from 'react-native-config';

class DeliveryOrder extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            search: '',
        }
    }

    doSearch() {
        const { search } = this.state;

        fetch('http://192.168.100.9:3200/v2/delivery-order.php?do_number=' + search)
            .then((response) => response.json())
            .then((json) => {
                if (json.info == false) {
                    // TODO : Display a message box or snackbar
                    return;
                }

                this.context.setResult(json.item);
                this.props.navigation.navigate("DeliveryOrderResult")
            })
            .catch((error) => console.error(error));
    }

    render() {
        return (
            <View style={MainStyle.container}>
                <TextInput
                    placeholder="Delivery Order"
                    style={MainStyle.theme_input}
                    onChangeText={(text) => this.setState({ search: text })}
                />

                <Button onPress={(e) => this.doSearch()} title="Cari DO" style={MainStyle.button_submit} />
            </View>
        );
    }
}

DeliveryOrder.contextType = SearchData;
export default DeliveryOrder;