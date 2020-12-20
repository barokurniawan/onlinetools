import React from 'react';
import { Button, TextInput, View } from 'react-native';
import MainStyle from '../../style/MainStyle';

class DeliveryOrder extends React.Component {
    render() {
        return (
            <View style={MainStyle.container}>
                <TextInput
                    placeholder="Delivery Order"
                    style={{
                        width: 250
                    }}
                />

                <Button onPress={() => { this.props.navigation.navigate("DeliveryOrderResult") }} title="Cari DO" style={MainStyle.button_submit} />
            </View>
        );
    }
}

export default DeliveryOrder;