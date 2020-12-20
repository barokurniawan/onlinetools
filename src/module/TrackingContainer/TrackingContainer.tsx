import React from 'react';
import { Button, TextInput, View } from 'react-native';
import MainStyle from '../../style/MainStyle';

class TrackingContainer extends React.Component {
    render() {
        return (
            <View style={MainStyle.container}>
                <TextInput
                    placeholder="Container Number"
                    style={MainStyle.theme_input}
                />

                <Button onPress={() => { this.props.navigation.navigate("TrackingContainerResult") }} title="Cari Container" style={MainStyle.button_submit} />
            </View>
        );
    }
}

export default TrackingContainer;