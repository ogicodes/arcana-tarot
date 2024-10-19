import React from "react";
import { View, Text } from "react-native";
import { Chip } from "../chip/chip";
import { Image } from "expo-image";
import profilePic from "../../../public/images/placeholderProfilePic.png";

export default function AddFriendCard({text}: {text: string}) {
    return (
        <View className="flex flex-col items-start justify-center m-4">
        <Image
          source={profilePic}
          className="w-16 h-16 rounded-full"
          placeholder={profilePic}
          contentFit="cover"
          transition={1000}
        />
        <Text className="text-md text-start text-[#FEFEFF] font-semibold font-mono ml-2 mt-2">
            {text}
        </Text>
        <Chip radius="md" size="md" styles="ml-2 mt-2">
          Add
        </Chip>
      </View>
    )
}