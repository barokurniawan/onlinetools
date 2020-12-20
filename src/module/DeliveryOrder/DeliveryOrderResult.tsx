import React from 'react';
import { ScrollView, Text, Button, View } from 'react-native';
import MainStyle from '../../style/MainStyle';

class DeliveryOrderResult extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <ScrollView>
                <View style={{ flex: 1, flexDirection: 'column' }}>
                    <View style={MainStyle.list_view}>
                        <Text style={MainStyle.item_label}>DO Number</Text>
                        <Text style={MainStyle.item_description}>SITGJTBT001</Text>
                    </View>
                    <View style={MainStyle.list_view}>
                        <Text style={MainStyle.item_label}>Customer</Text>
                        <Text style={MainStyle.item_description}>SIT</Text>
                    </View>
                    <View style={MainStyle.list_view}>
                        <Text style={MainStyle.item_label}>Consignee</Text>
                        <Text style={MainStyle.item_description}>PT. Jaya Sentosa QQ PT. Bahtera Apung Pangandaran</Text>
                    </View>
                    <View style={MainStyle.list_view}>
                        <Text style={MainStyle.item_label}>Vessel</Text>
                        <Text style={MainStyle.item_description}>KMTC HOCHIMINH-2012N</Text>
                    </View>
                    <View style={MainStyle.list_view}>
                        <Text style={MainStyle.item_label}>Destination</Text>
                        <Text style={MainStyle.item_description}>HO CHI MINH</Text>
                    </View>
                    <View style={MainStyle.list_view}>
                        <Text style={MainStyle.item_label}>Using seal</Text>
                        <Text style={MainStyle.item_description}>Yes</Text>
                    </View>
                    <View style={MainStyle.list_view}>
                        <Text style={MainStyle.item_label}>Party</Text>
                        <Text style={MainStyle.item_description}>2x40HC, 2x20GP, 2x45GP</Text>
                    </View>
                    <View style={MainStyle.list_view}>
                        <Text style={MainStyle.item_label}>Release</Text>
                        <Text style={MainStyle.item_description}>2</Text>
                    </View>
                    <View style={MainStyle.list_view}>
                        <Text style={MainStyle.item_label}>Remark</Text>
                        <Text style={MainStyle.item_description}>CONTAINER GOOD CONDITION</Text>
                    </View>
                    <View style={MainStyle.list_view}>
                        <Text style={MainStyle.item_label}>Second Remark</Text>
                        <Text style={MainStyle.item_description}>-</Text>
                    </View>
                </View>
            </ScrollView>
        );
    }
}

export default DeliveryOrderResult;