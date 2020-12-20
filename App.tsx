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

const Tab = createMaterialTopTabNavigator();
const ApplicationStack = createStackNavigator();

class App extends React.Component {
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
        );
    }
}

export default App;