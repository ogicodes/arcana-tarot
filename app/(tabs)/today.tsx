import { Text, View, SafeAreaView } from "react-native";
import { Image } from 'expo-image'
import { getRandomMajorCard } from '../lib/cards';
import back from '../../public/images/back/BACK.png'
import { useState } from 'react';
import React from "react";

const blurhash =
  '|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[';


export default function TodayScreen() {
  const card = getRandomMajorCard();
  const [flipped, setFlipped] = useState(back);
  const [flipCount, setFlipCount] = useState(0);

  const handleStart = () => {
    if (flipCount < 1) {
      setFlipCount(1);
      setFlipped(card);
    } else {
      return;
    }
  }

  return (
    <SafeAreaView className='w-screen h-screen bg-[#121212]'>
      <View className="border-b-[1px] border-[#DDDCDB] w-full mb-12">
        <Text className="text-3xl pl-8 text-start text-[#FEFEFF] font-glassAntigua mb-4">
          Today
        </Text>
      </View>
      <View className="flex flex-col items-center justify-center">
        <Text className="text-5xl text-[#FEFEFF] font-glassAntigua mb-2 shadow-md shadow-orange-50">
          Flip Your Card
        </Text>
        <Text className="text-3xl text-[#FEFEFF] font-glassAntigua mb-10 shadow-md shadow-orange-50">
          And Start Your Day
        </Text>
        <Image
          source={flipped}
          className="w-72 h-[500px] rounded-xl"
          placeholder={{ blurhash }}
          contentFit="cover"
          transition={1000}
          onTouchStart={handleStart}
        />
      </View>
    </SafeAreaView>
  );
}
