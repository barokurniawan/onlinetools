import React from 'react';
import { ActivityIndicator, FlatList, SafeAreaView, ScrollView, Text, View } from 'react-native';

class DeliveryOrderResult extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            data: [],
            isLoading: true
        };
    }

    componentDidMount() {
        fetch('https://reactnative.dev/movies.json')
            .then((response) => response.json())
            .then((json) => {
                this.setState({ data: json.movies });
            })
            .catch((error) => console.error(error))
            .finally(() => {
                this.setState({ isLoading: false });
            });
    }

    render() {
        const { data, isLoading } = this.state;

        return (
            <View style={{ flex: 1, flexDirection: 'row' }}>
                {isLoading ? <ActivityIndicator /> : (
                    <FlatList
                        data={data}
                        keyExtractor={({ id }, index) => id}
                        renderItem={({ item }) => (
                            <Text>{item.title}, {item.releaseYear}</Text>
                        )}
                    />
                )}
            </View>
        );
    }
}

export default DeliveryOrderResult;