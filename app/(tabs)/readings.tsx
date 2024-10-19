import { Text, View, SafeAreaView } from "react-native";
import { Image } from "expo-image";
import { getRandomMajorCard } from "../lib/cards";
import cardBack from '../../public/images/back/BACK.png'
import React from "react";

const blurhash =
  "|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[";

export default function ReadingsScreen() {
  const card = getRandomMajorCard();

  return (
    <SafeAreaView className="w-screen h-screen bg-[#121212]">
      <View className="border-b-[1px] border-[#DDDCDB] w-full mb-16">
        <Text className="text-3xl pl-8 text-start text-[#FEFEFF] font-glassAntigua mb-4">
          Readings
        </Text>
      </View>
      <View className="flex flex-col items-center justify-center w-[100%]">
        <View className="flex flex-row justify-between items-center mb-16">
          <View className="mr-20 mb-28 ml-2">
            <Image
              source={cardBack}
              className="w-24 h-40 rounded-xl rotate-12 translate-x-3 -translate-y-3 absolute"
              placeholder={{ blurhash }}
              contentFit="cover"
              transition={1000}
            />
            <Image
              source={cardBack}
              className="w-24 h-40 rounded-xl -rotate-12 -translate-x-3 -translate-y-3 absolute"
              placeholder={{ blurhash }}
              contentFit="cover"
              transition={1000}
            />
            <Image
              source={card}
              className="w-24 h-40 rounded-xl absolute"
              placeholder={{ blurhash }}
              contentFit="cover"
              transition={1000}
            />
          </View>
          <View className="flex flex-col items-center justify-end w-[65%] pl-10 pt-6">
            <Text className="text-4xl text-[#FEFEFF] font-glassAntigua mb-2">
              3 Card Spread
            </Text>
            <Text className="text-md font-thin text-[#FEFEFF] text-center font-mono">
              A simple and direct way to{"\n"}
              get clarity on a specific question{"\n"}
              that requires a straightforward answer,{"\n"}
              either yes or no.
            </Text>
          </View>
        </View>
        <View className="flex flex-row justify-between items-center mb-16">
          <View className="mr-20 mb-28 ml-2">
            <Image
              source={cardBack}
              className="w-24 h-40 rounded-xl rotate-12 translate-x-3 -translate-y-3 absolute"
              placeholder={{ blurhash }}
              contentFit="cover"
              transition={1000}
            />
            <Image
              source={cardBack}
              className="w-24 h-40 rounded-xl -rotate-12 -translate-x-3 -translate-y-3 absolute"
              placeholder={{ blurhash }}
              contentFit="cover"
              transition={1000}
            />
            <Image
              source={cardBack}
              className="w-24 h-40 rounded-xl rotate-6 translate-x-3 -translate-y-3 absolute"
              placeholder={{ blurhash }}
              contentFit="cover"
              transition={1000}
            />
            <Image
              source={cardBack}
              className="w-24 h-40 rounded-xl -rotate-6 -translate-x-3 -translate-y-3 absolute"
              placeholder={{ blurhash }}
              contentFit="cover"
              transition={1000}
            />
            <Image
              source={card}
              className="w-24 h-40 rounded-xl absolute"
              placeholder={{ blurhash }}
              contentFit="cover"
              transition={1000}
            />
          </View>
          <View className="flex flex-col items-center justify-end w-[65%] pl-10 pt-6">
            <Text className="text-4xl text-[#FEFEFF] font-glassAntigua mb-2">
              5 Card Spread
            </Text>
            <Text className="text-md font-thin text-[#FEFEFF] text-center font-mono">
              A simple and direct way to{"\n"}
              get clarity on a specific question{"\n"}
              that requires a straightforward answer,{"\n"}
              either yes or no.
            </Text>
          </View>
        </View>
        <View className="flex flex-row justify-between items-center">
          <View className="mr-20 mb-28 ml-2">
            <Image
              source={cardBack}
              className="w-24 h-40 rounded-xl rotate-[18deg] translate-x-3 -translate-y-3 absolute"
              placeholder={{ blurhash }}
              contentFit="cover"
              transition={1000}
            />
            <Image
              source={cardBack}
              className="w-24 h-40 rounded-xl -rotate-[18deg] -translate-x-3 -translate-y-3 absolute"
              placeholder={{ blurhash }}
              contentFit="cover"
              transition={1000}
            />
            <Image
              source={cardBack}
              className="w-24 h-40 rounded-xl rotate-12 translate-x-3 -translate-y-3 absolute"
              placeholder={{ blurhash }}
              contentFit="cover"
              transition={1000}
            />
            <Image
              source={cardBack}
              className="w-24 h-40 rounded-xl -rotate-12 -translate-x-3 -translate-y-3 absolute"
              placeholder={{ blurhash }}
              contentFit="cover"
              transition={1000}
            />
            <Image
              source={cardBack}
              className="w-24 h-40 rounded-xl rotate-6 translate-x-3 -translate-y-3 absolute"
              placeholder={{ blurhash }}
              contentFit="cover"
              transition={1000}
            />
            <Image
              source={cardBack}
              className="w-24 h-40 rounded-xl -rotate-6 -translate-x-3 -translate-y-3 absolute"
              placeholder={{ blurhash }}
              contentFit="cover"
              transition={1000}
            />
            <Image
              source={card}
              className="w-24 h-40 rounded-xl absolute"
              placeholder={{ blurhash }}
              contentFit="cover"
              transition={1000}
            />
          </View>
          <View className="flex flex-col items-center justify-end w-[65%] pl-10 pt-6">
            <Text className="text-4xl text-[#FEFEFF] font-glassAntigua mb-2">
              7 Card Spread
            </Text>
            <Text className="text-md font-thin text-[#FEFEFF] text-center font-mono">
              A simple and direct way to{"\n"}
              get clarity on a specific question{"\n"}
              that requires a straightforward answer,{"\n"}
              either yes or no.
            </Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}
