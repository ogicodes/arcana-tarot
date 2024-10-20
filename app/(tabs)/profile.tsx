import React from "react";
import { Text, View, SafeAreaView, ScrollView } from "react-native";
import { Image } from "expo-image";
import { PenBox } from "lucide-react-native";
import profilePic from "../../public/images/placeholderProfilePic.png";
import { useState } from "react";
import { Input } from "@/components/ui/input/input";
import Reading from "@/components/ui/readings/readings";



const blurhash =
  "|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[";

export default function ProfileScreen() {
  const [search, setSearch] = useState("");


  return (
    <SafeAreaView className="w-screen h-screen bg-[#121212]">
      <View className="flex flex-row justify-between items-center w-full">
        <View className="flex flex-row">
          <Image
            source={profilePic}
            className="w-14 h-14 rounded-full ml-6 my-8"
            placeholder={{ blurhash }}
            contentFit="cover"
            transition={1000}
          />
          <View className="flex flex-col items-start justify-center ml-2">
            <Text className="text-2xl text-start text-[#FEFEFF] font-glassAntigua">
              Ognjen Dimitrijevic
            </Text>
            <Text className="text-md font-thin text-start text-[#DDDCDB] font-mono">
              @bigDawg
            </Text>
          </View>
        </View>
        <PenBox className="text-[#FEFEFF] mr-10" />
      </View>
      <View className="flex flex-col items-center justify-center">
        <Input
          placeholder="Search..."
          size="md"
          radius="lg"
          style="w-[80%]"
          type="search"
          value={search}
          onChangeText={setSearch}
        />
      </View>
      <ScrollView>
        <View className="flex flex-col items-center justify-center w-full ml-8">
          <Reading />
          <Reading />
          <Reading />
          <Reading />
          <Reading />
          <Reading />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
