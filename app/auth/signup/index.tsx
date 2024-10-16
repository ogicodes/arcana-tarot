import { View, Text, SafeAreaView } from "react-native";
import { Button } from "@/components/ui/button/button";
import { Link, useRouter } from "expo-router";
import { Input } from "@/components/ui/input/input";
import { useState } from "react";
import { CheckBox } from "@/components/ui/checkbox/checkbox";

export default function SignIn() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [isChecked, setIsChecked] = useState(false);

  const router = useRouter();

  return (
    <SafeAreaView className="flex items-start justify-start bg-[#1E1E1E] h-full">
      <View className="border-b-[1px] border-[#DDDCDB] w-full">
        <Text className="text-5xl pl-8 font-bold text-start text-[#FEFEFF] font-glassAntigua mb-4">
          Arcana
        </Text>
      </View>
      <View className="flex items-start justify-center w-full mt-10 ">
        <Text className="text-4xl pl-4 font-bold text-[#FEFEFF] font-mono mx-8 mb-2">
          Sign Up
        </Text>
        <View className="flex flex-row items-center justify-start w-full my-2 mx-12">
          <Text className="text-md font-regular text-[#DDDCDB] font-mono mb-2">
            To start using
          </Text>
          <Text className="text-xl pl-2 font-regular text-[#DDDCDB] font-glassAntigua mb-2">
            Arcana
          </Text>
        </View>
        <View className="flex flex-col items-center justify-center w-full mt-6">
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
          <Text className="text-md font-regular text-[#DDDCDB] font-mono mt-8 mb-2 w-full ml-20">
            Confirm Password
          </Text>
          <Input
            placeholder="Confirm Password"
            size="md"
            radius="lg"
            style="w-[80%]"
            type="password"
            value={confirmPassword}
            onChangeText={setConfirmPassword}
          />
        </View>
        <View className="ml-12 mt-4">
          <CheckBox
            label="I accept the Terms of Use & Privacy Policy"
            isChecked={isChecked}
            onToggle={() => setIsChecked(!isChecked)}
            size="md"
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
          Sign Up
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
            Already have account?
          </Text>
          <Link
            href="/auth/signin"
            className="text-lg pl-2 font-regular text-[#FEFEFF] font-mono mb-2"
          >
            Log In
          </Link>
        </View>
      </View>
      <View className="flex flex-row items-center justify-between w-full mt-4 border-t-[1px] pt-4 border-[#DDDCDB]">
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
