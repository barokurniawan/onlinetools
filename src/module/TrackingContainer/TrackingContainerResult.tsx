import React from 'react';
import { ActivityIndicator, FlatList, Text, View } from 'react-native';
import MainStyle from '../../style/MainStyle';

class TrackingContainerResult extends React.Component {

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
        return (
            <View style={{ flex: 1, flexDirection: 'row' }}>
                {this.state.isLoading ? <ActivityIndicator size="large" color="#0000ff" style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }} /> : (
                    <FlatList
                        data={this.state.data}
                        keyExtractor={({ id }, index) => id}
                        renderItem={({ item }) => (
                            <Text style={MainStyle.list_view}>{item.title}, {item.releaseYear}</Text>
                        )}
                    />
                )}
            </View>
        );
    }
}

export default TrackingContainerResult;