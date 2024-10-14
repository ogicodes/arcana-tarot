import { View, Text, SafeAreaView } from "react-native";
import { Button } from "@/components/ui/button/button";
import { Link, useRouter } from "expo-router";
import { Input } from "@/components/ui/input/input";
import { useState } from "react";

export default function SignIn() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const router = useRouter();

  return (
    <SafeAreaView className="flex items-start justify-start bg-[#1E1E1E] h-full">
      <View className="border-b-[1px] border-[#DDDCDB] w-full">
        <Text className="text-5xl pl-8 font-bold text-start text-[#FEFEFF] font-glassAntigua mb-4">
          Arcana
        </Text>
      </View>
      <View className="flex items-center justify-center w-full mb-10">
        <Text className="text-4xl pl-4 font-bold text-[#FEFEFF] font-mono mb-2">
          Log in
        </Text>
        <View className="flex flex-row items-center justify-center w-full my-4">
          <Text className="text-xl font-regular text-[#FEFEFF] font-mono mb-2">
            To start using
          </Text>
          <Text className="text-xl pl-2 font-regular text-[#FEFEFF] font-glassAntigua mb-2">
            Arcana
          </Text>
        </View>
        <View className="flex flex-row items-center justify-center w-full my-4">
            <Input
                placeholder="Email"
                size="md"
                radius="lg"
                style="w-[80%] mb-4"
                value={email}
                onChangeText={setEmail}
            />
            <Input
                placeholder="Password"
                size="md"
                radius="lg"
                style="w-[80%]"
                type="password"
                value={password}
                onChangeText={setPassword}
            />
        </View>
      </View>
      <View className="flex items-center justify-center w-full my-4">
        <Button
          styles="w-[80%] mb-8"
          textSize="lg"
          color="secondary"
          size="xl"
          radius="lg"
          variant="primary"
          onClick={() => router.push("/(tabs)/")}
        >
          Log in
        </Button>
        <Button
          styles="w-[80%]"
          textSize="lg"
          color="secondary"
          size="xl"
          radius="lg"
          variant="primary"
          onClick={() => router.push("/(tabs)/")}
        >
          Continue with Google
        </Button>
        <View className="flex flex-row items-center justify-center w-full my-4">
        <Text className="text-md font-regular text-[#757575] font-mono mb-2">Dont have account?</Text>
        <Link href="/auth/signup/" className="text-lg pl-2 font-regular text-[#FEFEFF] font-mono mb-2">Sign Up</Link>
        </View>
      </View>
      <View className="flex flex-row items-center justify-between w-full mt-20 border-t-[1px] pt-4 border-[#DDDCDB]">
        <Text className="text-sm px-4 font-bold text-[#FEFEFF] font-glassAntigua mb-2">
          All Wrongs Reversed.
        </Text>
        <Text className="text-sm px-4 font-bold text-[#FEFEFF] font-glassAntigua mb-2">
          Ogi Dimitrijevic 2024.
        </Text>
      </View>
    </SafeAreaView>
  );
}
