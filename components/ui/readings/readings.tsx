import React, { useRef } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Image } from "expo-image";
import spread from "../../../public/images/spread.png";
import { BottomSheetModal } from "@gorhom/bottom-sheet";
import CustomBottomSheet from "@/components/ui/bottomsheet/bottomsheet";


const blurhash =
  "|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[";

const Reading = () => {
  const bottomSheetRef = useRef<BottomSheetModal>(null);

  function handlePresentModalPress() {
    bottomSheetRef.current!.present();
  }

  return (
    <View className="flex flex-col justify-between items-start w-full my-4">
      <Text className=" text-xl text-start text-[#FEFEFF] font-glassAntigua mb-8">
        Monday, 3rd
      </Text>
        <TouchableOpacity className="flex flex-row mb-8" onPress={handlePresentModalPress}>
        <Image
          source={spread}
          className="w-32 h-32"
          placeholder={{ blurhash }}
          contentFit="contain"
          transition={1000}
        />
        <View className="flex flex-col items-start justify-center ml-4">
          <Text className="text-4xl text-start text-[#FEFEFF] font-glassAntigua">
            Relationship{"\n"}Spread
          </Text>
          <Text className="text-lg text-start text-[#FEFEFF] font-mono font-thin mt-2">
            5:30 PM
          </Text>
        </View>
        </TouchableOpacity>
      <CustomBottomSheet ref={bottomSheetRef} />
    </View>
  );
};

export default Reading;