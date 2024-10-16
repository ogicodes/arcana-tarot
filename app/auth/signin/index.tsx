import { View, Text, SafeAreaView } from "react-native";
import { Link, useRouter } from "expo-router";
import { useState } from "react";
import { Input } from "@/components/ui/input/input";
import { CheckBox } from "@/components/ui/checkbox/checkbox";
import { Button } from "@/components/ui/button/button";

export default function SignIn() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [isChecked, setIsChecked] = useState(false);

  const router = useRouter();

  return (
    <SafeAreaView className="flex items-start justify-start bg-[#1E1E1E] h-full">
      <View className="border-b-[1px] border-[#DDDCDB] w-full">
        <Text className="text-5xl pl-8 font-bold text-start text-[#FEFEFF] font-glassAntigua mb-4">
          Arcana
        </Text>
      </View>
      <View className="flex items-start justify-center w-full mt-14 ">
        <Text className="text-4xl pl-4 font-bold text-[#FEFEFF] font-mono mx-8 mb-2">
          Log in
        </Text>
        <View className="flex flex-row items-center justify-start w-full mb-8 mx-12">
          <Text className="text-md font-regular text-[#DDDCDB] font-mono mb-2">
            To start using
          </Text>
          <Text className="text-xl pl-2 font-regular text-[#DDDCDB] font-glassAntigua mb-2">
            Arcana
          </Text>
        </View>
        <View className="flex flex-col items-center justify-center w-full my-10">
          <Text className="text-md font-regular text-[#DDDCDB] font-mono mb-2 w-full ml-20">
            Email
          </Text>
          <Input
            placeholder="Email"
            size="md"
            radius="lg"
            style="w-[80%] mb-8 "
            value={email}
            onChangeText={setEmail}
            type="text"
          />
          <Text className="text-md font-regular text-[#DDDCDB] font-mono mb-2 w-full ml-20">
            Password
          </Text>
          <Input
            placeholder="Password"
            size="md"
            radius="lg"
            style="w-[80%]"
            type="password"
            value={password}
            onChangeText={setPassword}
          />
          <View className="flex flex-row justify-around w-full mt-2 items-center">
          <CheckBox
            label="Remember me"
            isChecked={isChecked}
            onToggle={() => setIsChecked(!isChecked)}
            size="md"
            />
            <Link href="/auth/forgotpassword" className="text-md font-regular text-[#DDDCDB] font-mono">
                Forgot Password?
            </Link>
          </View>
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
          <Text className="text-md font-regular text-[#757575] font-mono mb-2">
            Dont have account?
          </Text>
          <Link
            href="/auth/signup"
            className="text-lg pl-2 font-regular text-[#FEFEFF] font-mono mb-2"
          >
            Sign Up
          </Link>
        </View>
      </View>
      <View className="flex flex-row items-center justify-between w-full mt-[36px] border-t-[1px] pt-4 border-[#DDDCDB]">
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
