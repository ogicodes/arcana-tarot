import React from "react";
import { View, Text } from "react-native";
import { Chip } from "../chip/chip";
import { Image } from "expo-image";
import profilePic from "../../../public/images/placeholderProfilePic.png";
import { MoreHorizontalIcon } from "lucide-react-native";

export default function YourFriend({ text }: { text: string }) {
  return (
    <View className="flex flex-row items-center justify-between m-4">
      <View className="flex flex-row">
        <Image
          source={profilePic}
          className="w-16 h-16 rounded-full"
          placeholder={profilePic}
          contentFit="cover"
          transition={1000}
        />
        <View className="flex flex-col">
          <Text className="text-md text-start text-[#FEFEFF] font-semibold font-mono ml-2 mt-2">
            {text}
          </Text>
          <Text className="text-xs text-start text-[#FEFEFF] font-mono ml-2 mt-2">
            @{text}
          </Text>
        </View>
      </View>
      <View className="flex flex-row items-center">
        <Chip radius="md" size="md" styles="mx-2 mt-2">
          MESSAGE
        </Chip>
        <MoreHorizontalIcon size={30} className="mx-5 text-[#FEFEFF]" />
      </View>
    </View>
  );
}
