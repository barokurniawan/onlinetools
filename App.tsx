import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import DeliveryOrder from './src/module/DeliveryOrder/DeliveryOrder';
import DeliveryOrderResult from './src/module/DeliveryOrder/DeliveryOrderResult';
import TrackingContainer from './src/module/TrackingContainer/TrackingContainer';
import TrackingContainerResult from './src/module/TrackingContainer/TrackingContainerResult';
import BillOfLading from './src/module/BillOfLading/BillOfLading';
import BillOfLadingResult from './src/module/BillOfLading/BillOfLadingResult';
import SearchData from './src/context/SearchData';

const Tab = createMaterialTopTabNavigator();
const ApplicationStack = createStackNavigator();

class App extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            result: ""
        };
    }

    setResult = (mResult) => {
        this.setState({
            result: mResult
        });
    }

    NavigationContainerStack() {
        return (
            <Tab.Navigator initialRouteName="Delivery Order" tabBarPosition="bottom" swipeEnable="true" tabBarOptions={{
                showIcon: true,
                showLabel: false
            }}>
                <Tab.Screen name="Delivery Order" component={DeliveryOrder} options={{
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="truck-delivery" color={color} size={26} />
                    ),
                }} />

                <Tab.Screen name="Bill of Lading" component={BillOfLading} options={{
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="clipboard-list" color={color} size={26} />
                    ),
                }} />

                <Tab.Screen name="Tracking Container" component={TrackingContainer} options={{
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="map-clock" color={color} size={26} />
                    ),
                }} />
            </Tab.Navigator>
        );
    }

    render() {
        return (
            <SearchData.Provider value={{
                result: this.state.result,
                setResult: this.setResult
            }}>
                <NavigationContainer>
                    <ApplicationStack.Navigator headerMode="float" screenOptions={{
                        headerShown: false
                    }}>
                        <ApplicationStack.Screen name="Home" component={this.NavigationContainerStack} />

                        <ApplicationStack.Screen name="DeliveryOrderResult" component={DeliveryOrderResult} options={{
                            title: 'Result',
                            headerStyle: {
                                backgroundColor: '#3f51b5'
                            },
                            headerTintColor: '#fff',
                            headerTitleStyle: {
                                fontWeight: 'bold',
                            },
                            headerShown: true,
                        }} />

                        <ApplicationStack.Screen name="BillOfLadingResult" component={BillOfLadingResult} options={{
                            title: 'Result',
                            headerStyle: {
                                backgroundColor: '#3f51b5'
                            },
                            headerTintColor: '#fff',
                            headerTitleStyle: {
                                fontWeight: 'bold',
                            },
                            headerShown: true,
                        }} />

                        <ApplicationStack.Screen name="TrackingContainerResult" component={TrackingContainerResult} options={{
                            title: 'Result',
                            headerStyle: {
                                backgroundColor: '#3f51b5'
                            },
                            headerTintColor: '#fff',
                            headerTitleStyle: {
                                fontWeight: 'bold',
                            },
                            headerShown: true,
                        }} />
                    </ApplicationStack.Navigator>
                </NavigationContainer>
            </SearchData.Provider>
        );
    }
}

export default App;