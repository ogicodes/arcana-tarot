import {
  Text,
  View,
  SafeAreaView,
  ScrollView,
} from "react-native";
import React from "react";

import Spread, { spreadContents, modalContents } from "@/components/ui/spreads/spreads";




export default function ReadingsScreen() {


  return (
    <SafeAreaView className="w-screen h-screen bg-[#121212]">
      <View className="border-b-[1px] border-[#DDDCDB] w-full">
        <Text className="text-3xl pl-8 text-start text-[#FEFEFF] font-glassAntigua mb-4">
          Readings
        </Text>
      </View>
      <ScrollView>
      <View className="flex flex-col items-center justify-center w-[100%] mt-12">
        {spreadContents && spreadContents.map((spread, index) => (
          <Spread
            key={index}
            title={spread.title}
            description={spread.description}
            image={spread.image}
            modal={modalContents[index]}
          />
        ))}
      </View>
      </ScrollView>
    </SafeAreaView>
  );
}
