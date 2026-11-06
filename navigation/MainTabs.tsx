import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen from '../screens/HomeScreen';
import CartScreen from '../screens/CartScreen';
import ProfileScreen from '../screens/ProfileScreen';

import { RootTabParamList } from '../types/Navigation';

import { Ionicons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator<RootTabParamList>();

export default function MainTabs(){
    return(
        <Tab.Navigator 
            screenOptions={({ route}) => ({
                tabBarIcon: ({color, size, focused}) => {
                    let iconName: 'home' | 'home-outline' | 'cart' | 'cart-outline' | 'person' | 'person-outline'

                    if(route.name==='Home' && focused){
                        iconName = 'home';
                    }else if (route.name==='Home'){
                        iconName = 'home-outline';
                    }else if (route.name==='Cart' && focused){
                        iconName = 'cart';
                    }else if (route.name==='Cart'){
                        iconName = 'cart-outline';
                    } else if(route.name==='Profile' && focused){
                        iconName = 'person'
                    }
                    else{
                        iconName = 'person-outline'
                    }

                    return <Ionicons name={iconName} size={size} color={color}/>
                },

                tabBarActiveTintColor:'blue',
                tabBarInactiveTintColor:'gray',
                tabBarStyle: {
                    backgroundColor: '#ffffff',
                    height: 65,
                    paddingBottom: 10,
                    paddingTop: 5,
                    },

                    tabBarLabelStyle: {
                    fontSize: 12,
                    fontWeight: '600',
                },
            })}
        >
            <Tab.Screen
                name='Home'
                component={HomeScreen}
            />
            <Tab.Screen
                name='Cart'
                component={CartScreen}
                options={{
                    title: 'My Cart',
                    tabBarLabel: 'Cart',
                }}
            />
            <Tab.Screen
                name='Profile'
                component={ProfileScreen}
            />
        </Tab.Navigator>
    )
}