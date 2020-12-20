import React from 'react';
import { Button, Text, TextInput, View } from 'react-native';
import MainStyle from '../../style/MainStyle';

class TrackingContainer extends React.Component {
    render() {
        return (
            <View style={MainStyle.container}>
                <TextInput
                    placeholder="Container Number"
                    style={{
                        width: 250
                    }}
                />

                <Button title="Cari Container" style={MainStyle.button_submit} />
            </View >
        );
    }
}

export default TrackingContainer;