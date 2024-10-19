import { Text, View, SafeAreaView } from "react-native";
import React from "react";
import { getRandomMajorCard } from "../lib/cards";
import Arcana from "@/components/ui/3Dcard/3Dcard";


export default function HomeScreen() {
  const card = getRandomMajorCard();

  return (
    <SafeAreaView className="w-screen h-screen bg-[#121212]">
      <View className="border-b-[1px] border-[#DDDCDB] w-full mb-8">
        <Text className="text-3xl pl-8 text-start text-[#FEFEFF] font-glassAntigua mb-4">
          Arcana
        </Text>
      </View>
      <View className="flex flex-col items-center justify-center">
        <Text className="text-4xl text-[#FEFEFF] font-glassAntigua mb-4 mt-4 shadow-md shadow-orange-50">
          Explore the Unknown
        </Text>
        <View className="w-full h-[500px]">
          <Arcana />
        </View>
        <Text className="text-4xl text-[#FEFEFF] font-glassAntigua pt-5 shadow-md shadow-orange-50">
          Find Your Clarity
        </Text>
      </View>
    </SafeAreaView>
  );
}
