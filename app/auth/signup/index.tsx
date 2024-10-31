import { View, Text, SafeAreaView } from "react-native";
import { Button } from "@/components/ui/button/button";
import { Link, useRouter } from "expo-router";
import { Input } from "@/components/ui/input/input";
import { useState } from "react";
import React from "react";
import { setToken } from "@/auth/auth";

export default function SignIn() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [username, setUsername] = useState<string>("");

  const router = useRouter();

  async function handleSubmit() {
    try {
      // Call the login API here
      const response = await fetch(`${process.env.EXPO_PUBLIC_API_URL}/auth/signup`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password, name, username }),
      });
      const data = await response.json();
      if (response.ok) {
        // Save the token to the secure store
        await setToken(data);
        // Redirect to the home page
        router.push("/(tabs)");
      }
    } catch (error) {
      console.error(error);
    }
  }

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
            Name
          </Text>
          <Input
            placeholder="name"
            size="md"
            radius="lg"
            style="w-[80%] mb-8"
            type="text"
            value={name}
            onChangeText={setName}
          />
        <Text className="text-md font-regular text-[#DDDCDB] font-mono mb-2 w-full ml-20">
            Username
          </Text>
          <Input
            placeholder="username"
            size="md"
            radius="lg"
            style="w-[80%] mb-8"
            type="text"
            value={username}
            onChangeText={setUsername}
          />
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

        </View>
        <View className="ml-12 mt-2">
          <Text className="text-xs font-thin text-[#DDDCDB] font-mono mb-2">By signing up you accept the Terms of Use & Privacy Policy</Text>
        </View>
      </View>
      <View className="flex items-center justify-center w-full my-4">
        <Button
          styles="w-[80%] mb-2"
          textSize="lg"
          color="secondary"
          size="xl"
          radius="lg"
          variant="primary"
          onClick={handleSubmit}
        >
          Sign Up
        </Button>
        <View className="flex flex-row items-center justify-center w-full mb-4">
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
