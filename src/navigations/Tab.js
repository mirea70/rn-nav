import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Mail, Profile, Settings } from '../screens';
import { MaterialIcons } from '@expo/vector-icons';

const TabIcon = ({ name, size, color }) => {
  return <MaterialIcons name={name} size={size} color={color} />;
};

const Tab = createBottomTabNavigator();

const TabNav = () => {
  return (
    <Tab.Navigator
      initialRouteName="Profile"
      screenOptions={{
        tabBarShowLabel: true,
        tabBarLabelPosition: 'below-icon',
        tabBarStyle: {
          backgroundColor: '#0f56b3',
          borderTopColor: '#ffffff',
          borderTopWidth: 3,
        },
        tabBarActiveTintColor: '#ffffff',
        tabBarInactiveTintColor: '#5096f1',
      }}
    >
      <Tab.Screen
        name="Mail"
        component={Mail}
        options={{
          tabBarIcon: (props) => {
            return TabIcon({
              ...props,
              name: props.focused ? 'mail' : 'mail-outline',
            });
          },
          tabBarLabel: '',
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: (props) => {
            return TabIcon({ ...props, name: 'person' });
          },
        }}
      />
      <Tab.Screen
        name="Settings"
        component={Settings}
        options={{
          tabBarIcon: (props) => {
            return TabIcon({ ...props, name: 'settings' });
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNav;
