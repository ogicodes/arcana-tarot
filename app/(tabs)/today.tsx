import {
  Text,
  View,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { Image } from "expo-image";
import { getRandomMajorCard } from "../lib/cards";
import back from "../../public/images/back/BACK.png";
import { useState, useRef } from "react";
import React from "react";
import CustomBottomSheet from "@/components/ui/bottomsheet/bottomsheet";
import { BottomSheetModal } from "@gorhom/bottom-sheet";
import { Button } from "@/components/ui/button/button";

const blurhash =
  "|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[";

export default function TodayScreen() {
  const card = getRandomMajorCard();
  const [flipped, setFlipped] = useState(back);
  const [flipCount, setFlipCount] = useState(0);
  const bottomSheetRef = useRef<BottomSheetModal>(null);

  function handlePresentModalPress() {
    if (flipCount < 1) {
      setFlipCount(flipCount + 1);
      setFlipped(card);
      setTimeout(() => {
        bottomSheetRef.current!.present();
      }, 1000);
    } else {
      bottomSheetRef.current!.present();
    }
  }

  return (
    <SafeAreaView className="w-screen h-screen bg-[#121212]">
      <ScrollView>
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
          <TouchableOpacity onPress={handlePresentModalPress}>
            <Image
              source={flipped}
              className="w-72 h-[500px] rounded-xl"
              placeholder={{ blurhash }}
              contentFit="cover"
              transition={1000}
            />
          </TouchableOpacity>
        </View>
        <CustomBottomSheet ref={bottomSheetRef}>
          <Text className="text-4xl pl-8 text-start text-[#121212] font-glassAntigua mb-4">
            Daily Arcane Guidance
          </Text>
          <Text className="text-2xl pl-8 text-start text-[#121212] font-glassAntigua mb-4">
            Today's Card: The World
          </Text>
          <Text className="text-xl px-8 text-start text-[#121212] font-glassAntigua mb-4">
            The World signifies the end of a significant cycle or journey in
            your life. The World signifies the end of a significant cycle or
            journey in your life. The World signifies the end of a significant
            cycle or journey in your life. The World signifies the end of a
            significant cycle or journey in your life. The World signifies the
            end of a significant cycle or journey in your life.
          </Text>
          <Button
            styles="w-[80%] flex mx-10 my-8"
            textSize="lg"
            color="secondary"
            size="xl"
            radius="lg"
            variant="primary"
            onClick={() => console.log("Save this to database")}
          >
            Save to Journal
          </Button>
        </CustomBottomSheet>
      </ScrollView>
    </SafeAreaView>
  );
}
