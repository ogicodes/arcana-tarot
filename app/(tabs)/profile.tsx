import { Text, View, SafeAreaView } from "react-native";

export default function ProfileScreen() {
  return (
    <SafeAreaView className='w-screen h-screen bg-[#121212]'>
      <View className="border-b-[1px] border-[#DDDCDB] w-full mb-12">
        <Text className="text-3xl pl-8 text-start text-[#FEFEFF] font-glassAntigua mb-4">
          Profile
        </Text>
      </View>
      <View className="flex flex-col items-center justify-center">
        <Text className="text-4xl text-[#FEFEFF] font-glassAntigua mb-10">
          Your Profile
        </Text>
      </View>
    </SafeAreaView>
  );
}
