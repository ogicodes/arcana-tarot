import { Text, View, SafeAreaView } from 'react-native';
import { Image } from 'expo-image'
import { getRandomCard } from '../lib/cards';

const blurhash =
  '|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[';


export default function HomeScreen() {
  const card = getRandomCard();
  return (
    <SafeAreaView className='w-screen h-screen bg-[#121212]'>
      <View className="border-b-[1px] border-[#DDDCDB] w-full mb-8">
        <Text className="text-3xl pl-8 text-start text-[#FEFEFF] font-glassAntigua mb-4">
          Arcana
        </Text>
      </View>
      <View className="flex flex-col items-center justify-center">
        <Text className="text-4xl text-[#FEFEFF] font-glassAntigua mb-10">
          Explore the Unknown
        </Text>
        <View className='w-72 h-[500px] shadow-[#b6b6b6] shadow-lg'>
        <Image
          source={card}
          className="w-72 h-[500px] rounded-xl"
          placeholder={{ blurhash }}
          contentFit="cover"
          transition={1000}
        />
        </View>
        <Text className="text-4xl text-[#FEFEFF] font-glassAntigua pt-10 shadow-md shadow-orange-50">
          Find Your Clarity 
        </Text>
      </View>
    </SafeAreaView>
  );
}

