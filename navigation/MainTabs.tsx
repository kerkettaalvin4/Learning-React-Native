import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen from '../screens/HomeScreen';
import CartScreen from '../screens/CartScreen';
import ProfileScreen from '../screens/ProfileScreen';

import { RootTabParamList } from '../types/Navigation';

const Tab = createBottomTabNavigator<RootTabParamList>();

export default function MainTabs(){
    return(
        <Tab.Navigator>
            <Tab.Screen
                name='Home'
                component={HomeScreen}
            />
            <Tab.Screen
                name='Cart'
                component={CartScreen}
            />
            <Tab.Screen
                name='Profile'
                component={ProfileScreen}
            />
        </Tab.Navigator>
    )
}