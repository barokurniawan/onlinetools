import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import DeliveryOrder from './src/module/DeliveryOrder/DeliveryOrder';
import TrackingContainer from './src/module/TrackingContainer/TrackingContainer';
import BillOfLading from './src/module/BillOfLading/BillOfLading';
import BillOfLadingResult from './src/module/BillOfLading/BillOfLadingResult';
import DeliveryOrderResult from './src/module/DeliveryOrder/DeliveryOrderResult';

const Tab = createMaterialTopTabNavigator();
const DeliveryOrderNav = createStackNavigator();
const BillOfLadingNav = createStackNavigator();

class App extends React.Component {
    DeliveryOrderStackScreen() {
        return (
            <DeliveryOrderNav.Navigator>
                <DeliveryOrderNav.Screen name="DeliveryOrder" component={DeliveryOrder} options={{
                    title: 'Delivery Order',
                    headerStyle: {
                        backgroundColor: '#3f51b5'
                    },
                    headerTintColor: '#fff',
                    headerTitleStyle: {
                        fontWeight: 'bold',
                    }
                }} />
                <DeliveryOrderNav.Screen name="DeliveryOrderResult" component={DeliveryOrderResult} options={{
                    title: 'Result',
                    headerStyle: {
                        backgroundColor: '#3f51b5'
                    },
                    headerTintColor: '#fff',
                    headerTitleStyle: {
                        fontWeight: 'bold',
                    }
                }} />
            </DeliveryOrderNav.Navigator>
        );
    }

    BillOfLadingStackScreen() {
        return (
            <BillOfLadingNav.Navigator headerMode="float">
                <BillOfLadingNav.Screen name="BillOfLading" component={BillOfLading} options={{
                    title: 'Bill of Lading',
                    headerStyle: {
                        backgroundColor: '#3f51b5'
                    },
                    headerTintColor: '#fff',
                    headerTitleStyle: {
                        fontWeight: 'bold',
                    }
                }} />
                <BillOfLadingNav.Screen name="BillOfLadingResult" component={BillOfLadingResult} options={{
                    title: 'Result',
                    headerStyle: {
                        backgroundColor: '#3f51b5'
                    },
                    headerTintColor: '#fff',
                    headerTitleStyle: {
                        fontWeight: 'bold',
                    }
                }} />
            </BillOfLadingNav.Navigator>
        );
    }

    render() {
        return (
            <NavigationContainer>
                <Tab.Navigator initialRouteName="Delivery Order" tabBarPosition="bottom" swipeEnable="true" tabBarOptions={{
                    showIcon: true,
                    showLabel: false,
                }}>
                    <Tab.Screen name="Delivery Order" component={this.DeliveryOrderStackScreen} options={{
                        tabBarIcon: ({ color }) => (
                            <MaterialCommunityIcons name="truck-delivery" color={color} size={26} />
                        ),
                    }} />
                    <Tab.Screen name="Bill of Lading" component={this.BillOfLadingStackScreen} options={{
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
            </NavigationContainer>
        );
    }
}

export default App;