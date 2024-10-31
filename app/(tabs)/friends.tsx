import React from "react";
import { Text, View, SafeAreaView, ScrollView } from "react-native";
import { Input } from "@/components/ui/input/input";
import { useState, useEffect } from "react";
import AddFriendCard from "@/components/ui/addfriend/addfriend";
import YourFriend from "@/components/ui/yourfriends/yourfriends";

const friendsList = [
  {
    key: "1",
    name: "Andy",
  },
  {
    key: "2",
    name: "Adil",
  },
  {
    key: "3",
    name: "Brian",
  },
  {
    key: "4",
    name: "Brick",
  },
  {
    key: "5",
    name: "Candice",
  },
  {
    key: "6",
    name: "Cameron",
  },
  {
    key: "7",
    name: "Daisy",
  },
  {
    key: "8",
    name: "Derek",
  },
  {
    key: "9",
    name: "Ella",
  },
  {
    key: "10",
    name: "Ethan",
  },
];

export default function FriendsScreen() {
  const [search, setSearch] = useState("");
  const [sortedFriends, setSortedFriends] = useState(friendsList);

  function sortFriends() {
    const friends = sortedFriends.sort((a, b) => a.name.localeCompare(b.name));
    setSortedFriends(friends);
  }

  const groupedFriends: { [key: string]: string[] } = {};

  sortedFriends.forEach((friend) => {
    const firstLetter = friend.name.charAt(0).toUpperCase();
    if (!groupedFriends[firstLetter]) {
      groupedFriends[firstLetter] = [];
    }
    groupedFriends[firstLetter].push(friend.name as string);
  });

  useEffect(() => {
    sortFriends();
  }, []);

  return (
    <SafeAreaView className="w-screen h-screen bg-[#121212]">
      <View className="w-full mb-8">
        <Text className="text-3xl pl-8 text-start text-[#FEFEFF] font-glassAntigua">
          Friends
        </Text>
      </View>
      <ScrollView horizontal className="h-44">
        {friendsList.map((friend) => (
          <AddFriendCard key={friend.key} text={friend.name} />
        ))}
      </ScrollView>
      <ScrollView className="mb-10 mt-2">
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
        {Object.keys(groupedFriends)
          .sort()
          .map((letter) => (
            <View key={letter} className="flex flex-col">
              <Text className="text-2xl text-start text-[#FEFEFF] font-glassAntigua ml-2">
                {letter}
              </Text>
              {groupedFriends[letter].map((friend, idx) => (
                <YourFriend key={idx} text={friend} />
              ))}
            </View>
          ))}
      </ScrollView>
    </SafeAreaView>
  );
}
