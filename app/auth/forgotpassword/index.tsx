import { View, Text, SafeAreaView } from "react-native";
import { Button } from "@/components/ui/button/button";
import { Input } from "@/components/ui/input/input";
import { useState } from "react";
import { useRouter } from "expo-router";

export default function ForgotPassword() {
    const router = useRouter();
    const [email, setEmail] = useState<string>("");
  return (
    <SafeAreaView className="flex items-start justify-start bg-[#1E1E1E] h-full">
      <View className="border-b-[1px] border-[#DDDCDB] w-full mb-60">
        <Text className="text-5xl pl-8 text-start text-[#FEFEFF] font-glassAntigua mb-4">
          Arcana
        </Text>
      </View>
      <View className="flex items-start justify-start w-full mb-10 ml-10">
        <Text className="text-4xl font-extrabold text-[#FEFEFF] font-mono mb-2">
          Forgot Password?
        </Text>
        <Text className="text-lg font-thin text-[#DDDCDB] font-momo mb-10">
          Enter email associated with your account
        </Text>
        <Text className="text-md font-regular text-[#DDDCDB] font-mono mb-2 w-full">
          Email
        </Text>
        <Input
          placeholder="Email"
          size="md"
          radius="lg"
          style="w-[80%] mb-10 "
          value={email}
          onChangeText={setEmail}
          type="text"
        />
        <Button
          styles="w-[80%]"
          textSize="lg"
          color="secondary"
          size="xl"
          radius="lg"
          variant="primary"
          onClick={() => router.push({ pathname: "/auth/newpassword", params: {} })}
        >
          Send Link
        </Button>
      </View>
      <View className="flex flex-row items-center justify-between w-full mt-44 border-t-[1px] pt-4 border-[#DDDCDB]">
        <Text className="text-sm px-4 font-thin text-[#FEFEFF] font-glassAntigua mb-2">
          All Wrongs Reversed.
        </Text>
        <Text className="text-sm px-4 font-thin text-[#FEFEFF] font-glassAntigua mb-2">
          Ogi Dimitrijevic 2024.
        </Text>
      </View>
    </SafeAreaView>
  );
}
