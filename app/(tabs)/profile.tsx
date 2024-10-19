import React from "react";
import { Text, View, SafeAreaView, ScrollView } from "react-native";
import { Image } from "expo-image";
import { PenBox } from "lucide-react-native";
import profilePic from "../../public/images/placeholderProfilePic.png";
import { useState } from "react";
import { Input } from "@/components/ui/input/input";
import spread from "../../public/images/spread.png";

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
          <View className="flex flex-col justify-between items-start w-full my-4">
            <Text className=" text-xl text-start text-[#FEFEFF] font-glassAntigua mb-8">
              Monday, 3rd
            </Text>
            <View className="flex flex-row mb-8">
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
            </View>
            <View className="flex flex-row">
                <Image
                  source={spread}
                  className="w-32 h-32"
                  placeholder={{ blurhash }}
                  contentFit="contain"
                  transition={1000}
                />
                <View className="flex flex-col items-start justify-center ml-4">
                <Text className="text-4xl text-start text-[#FEFEFF] font-glassAntigua">
                  Career Advice{"\n"}Reading
                </Text>
                <Text className="text-lg text-start text-[#FEFEFF] font-mono font-thin mt-2">
                  12:01 PM
                </Text>
                </View>
            </View>
          </View>
          <View className="flex flex-col justify-between items-start w-full my-4">
            <Text className=" text-xl text-start text-[#FEFEFF] font-glassAntigua mb-8">
              Sunday, 2rd
            </Text>
            <View className="flex flex-row mb-8">
                <Image
                  source={spread}
                  className="w-32 h-32"
                  placeholder={{ blurhash }}
                  contentFit="contain"
                  transition={1000}
                />
                <View className="flex flex-col items-start justify-center ml-4">
                <Text className="text-4xl text-start text-[#FEFEFF] font-glassAntigua">
                  Travel{"\n"}Thoughts
                </Text>
                <Text className="text-lg text-start text-[#FEFEFF] font-mono font-thin mt-2">
                  5:30 PM
                </Text>
                </View>
            </View>
            <View className="flex flex-row">
                <Image
                  source={spread}
                  className="w-32 h-32"
                  placeholder={{ blurhash }}
                  contentFit="contain"
                  transition={1000}
                />
                <View className="flex flex-col items-start justify-center ml-4">
                <Text className="text-4xl text-start text-[#FEFEFF] font-glassAntigua">
                   Past Present{"\n"}Future
                </Text>
                <Text className="text-lg text-start text-[#FEFEFF] font-mono font-thin mt-2">
                  12:01 PM
                </Text>
                </View>
            </View>
          </View>
          <View className="flex flex-col justify-between items-start w-full my-4">
            <Text className=" text-xl text-start text-[#FEFEFF] font-glassAntigua mb-8">
              Saturday, 1st
            </Text>
            <View className="flex flex-row mb-8">
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
            </View>
            <View className="flex flex-row">
                <Image
                  source={spread}
                  className="w-32 h-32"
                  placeholder={{ blurhash }}
                  contentFit="contain"
                  transition={1000}
                />
                <View className="flex flex-col items-start justify-center ml-4">
                <Text className="text-4xl text-start text-[#FEFEFF] font-glassAntigua">
                  Career Advice{"\n"}Reading
                </Text>
                <Text className="text-lg text-start text-[#FEFEFF] font-mono font-thin mt-2">
                  12:01 PM
                </Text>
                </View>
            </View>
          </View>
          <View className="flex flex-col justify-between items-start w-full my-4">
            <Text className=" text-xl text-start text-[#FEFEFF] font-glassAntigua mb-8">
              Monday, 3rd
            </Text>
            <View className="flex flex-row mb-8">
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
            </View>
            <View className="flex flex-row">
                <Image
                  source={spread}
                  className="w-32 h-32"
                  placeholder={{ blurhash }}
                  contentFit="contain"
                  transition={1000}
                />
                <View className="flex flex-col items-start justify-center ml-4">
                <Text className="text-4xl text-start text-[#FEFEFF] font-glassAntigua">
                  Career Advice{"\n"}Reading
                </Text>
                <Text className="text-lg text-start text-[#FEFEFF] font-mono font-thin mt-2">
                  12:01 PM
                </Text>
                </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
