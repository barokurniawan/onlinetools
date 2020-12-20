import React from 'react';
import { Button, TextInput, View } from 'react-native';
import MainStyle from '../../style/MainStyle';

class BillOfLading extends React.Component {

    render() {
        return (
            <View style={MainStyle.container}>
                <TextInput
                    placeholder="BL Number"
                    style={MainStyle.theme_input}
                />

                <Button onPress={() => { this.props.navigation.navigate("BillOfLadingResult") }} title="Cari BL" style={MainStyle.button_submit} />
            </View>
        );
    }
}

export default BillOfLading;