import { Tabs } from 'expo-router';
import React from 'react';



export default function TabLayout() {
  return (
    <Tabs>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home'
        }}
      />
      <Tabs.Screen
        name="friends"
        options={{
          title: 'friends',
        }}
      />
      <Tabs.Screen
        name="readings"
        options={{
          title: 'readings',
        }}
      />
      <Tabs.Screen
        name="today"
        options={{
          title: 'today',
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: 'profile',
        }}
      />

    </Tabs>
  );
}
