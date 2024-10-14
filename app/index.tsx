import { View, Text, SafeAreaView } from "react-native";
import { Button } from "@/components/ui/button/button";
import { useRouter } from "expo-router";

export default function App() {
const router = useRouter();

    return (
        <SafeAreaView className="flex items-start justify-start bg-[#1E1E1E] h-full">
            <View className="border-b-[1px] border-[#DDDCDB] w-full mb-60">
            <Text className="text-5xl pl-8 font-bold text-start text-[#FEFEFF] font-glassAntigua mb-4">Arcana</Text>
            </View>
            <View className="flex items-center justify-center w-full mb-10">
            <Text className="text-4xl pl-4 font-bold text-[#FEFEFF] font-glassAntigua mb-2">Explore the Unknown</Text>
            <Text className="text-4xl pl-4 font-bold text-[#FEFEFF] font-glassAntigua mb-2">Find Your Clarity</Text>
            </View>
            <View className="flex items-center justify-center w-full my-4">
            <Button styles="w-[80%] mb-8" textSize="lg" color="secondary" size="xl" radius="lg" variant="primary" onClick={() => router.push('/auth/signin/')} >Log in</Button>
            <Button styles="w-[80%]" textSize="lg" color="secondary" size="xl" radius="lg" variant="primary" onClick={() => router.push('/(tabs)/')} >Sign Up</Button>
            </View>
            <View className="flex flex-row items-center justify-between w-full mt-44 border-t-[1px] pt-4 border-[#DDDCDB]">
            <Text className="text-sm px-4 font-bold text-[#FEFEFF] font-glassAntigua mb-2">All Wrongs Reversed.</Text>
            <Text className="text-sm px-4 font-bold text-[#FEFEFF] font-glassAntigua mb-2">Ogi Dimitrijevic 2024.</Text>
            </View>
        </SafeAreaView>
    )
}