import { Tabs } from "expo-router";
import React from "react";
import { BlurView } from 'expo-blur';
import { LayoutDashboard, Users2Icon, BookOpenText, Calendar, UserCircle2 } from "lucide-react-native";
import { View } from "react-native";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "#FEFEFF",
        tabBarActiveBackgroundColor: "#212121",
        tabBarInactiveTintColor: "#757575",
        tabBarInactiveBackgroundColor: "#212121",
        tabBarShowLabel: false,
        tabBarIconStyle: {
          width: 20,
          height: 20,
          marginTop: 20,
        },
        tabBarItemStyle: {
          borderRadius: 20,
        },
        tabBarStyle: {
          borderTopWidth: 0,
          backgroundColor: "#212121",
          borderRadius: 40,
          position: 'absolute',
        },
        tabBarBackground:() => (
            <BlurView tint="dark" intensity={100} />
          ),
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({focused}) => (
            <View>
            <LayoutDashboard size={24} color={focused ? "#FEFEFF" : "#757575"}  />
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="friends"
        options={{
          title: "friends",
          tabBarIcon: ({color}) => (
            <UserCircle2 size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="readings"
        options={{
          title: "readings",
          tabBarIcon: ({color}) => (
            <BookOpenText size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="today"
        options={{
          title: "today",
          tabBarIcon: ({color}) => (
            <Calendar size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "profile",
          tabBarIcon: ({color}) => (
            <Users2Icon size={24} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
