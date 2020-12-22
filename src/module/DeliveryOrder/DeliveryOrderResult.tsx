import React from 'react';
import { ScrollView, Text, View } from 'react-native';
import MainStyle from '../../style/MainStyle';
import SearchData from '../../context/SearchData'

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
                        <Text style={MainStyle.item_description}>{this.context.result.do_number}</Text>
                    </View>
                    <View style={MainStyle.list_view}>
                        <Text style={MainStyle.item_label}>ETD</Text>
                        <Text style={MainStyle.item_description}>{this.context.result.etd_field}</Text>
                    </View>
                    <View style={MainStyle.list_view}>
                        <Text style={MainStyle.item_label}>Customer</Text>
                        <Text style={MainStyle.item_description}>{this.context.result.customer.name}</Text>
                    </View>
                    <View style={MainStyle.list_view}>
                        <Text style={MainStyle.item_label}>Consignee</Text>
                        <Text style={MainStyle.item_description}>{this.context.result.consignee.name}</Text>
                    </View>
                    <View style={MainStyle.list_view}>
                        <Text style={MainStyle.item_label}>Vessel</Text>
                        <Text style={MainStyle.item_description}>{this.context.result.vessel.vessel_name} - {this.context.result.vessel_voyage}</Text>
                    </View>
                    <View style={MainStyle.list_view}>
                        <Text style={MainStyle.item_label}>Transit</Text>
                        <Text style={MainStyle.item_description}>{this.context.result.transit || "-"}</Text>
                    </View>
                    <View style={MainStyle.list_view}>
                        <Text style={MainStyle.item_label}>Destination</Text>
                        <Text style={MainStyle.item_description}>{this.context.result.destination.name}</Text>
                    </View>
                    <View style={MainStyle.list_view}>
                        <Text style={MainStyle.item_label}>Using seal</Text>
                        <Text style={MainStyle.item_description}>{this.context.result.using_seal == 1 ? "Yes" : "No"}</Text>
                    </View>
                    <View style={MainStyle.list_view}>
                        <Text style={MainStyle.item_label}>Party</Text>
                        <Text style={MainStyle.item_description}>{this.context.result.delivery_order_detail.map((Item) => {
                            return Item.count + "x" + Item.size + Item.type + " ";
                        })}</Text>
                    </View>
                    <View style={MainStyle.list_view}>
                        <Text style={MainStyle.item_label}>Release</Text>
                        <Text style={MainStyle.item_description}>{this.context.result.container_out.length}</Text>
                    </View>
                    <View style={MainStyle.list_view}>
                        <Text style={MainStyle.item_label}>Remark</Text>
                        <Text style={MainStyle.item_description}>{this.context.result.first_remark}</Text>
                    </View>
                    <View style={MainStyle.list_view}>
                        <Text style={MainStyle.item_label}>Second Remark</Text>
                        <Text style={MainStyle.item_description}>{this.context.result.second_remark}</Text>
                    </View>
                </View>
            </ScrollView>
        );
    }
}

DeliveryOrderResult.contextType = SearchData;
export default DeliveryOrderResult;