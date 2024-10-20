import { View, Text } from "react-native";
import React from "react";



interface SpreadCardProps {
    key: string;
    title: string;
    description: string;
}

const SpreadCard: React.FC<SpreadCardProps> = ({ key, title, description }) => {
  return (
    <View className="flex flex-row justify-between items-center mx-2 my-8">
      <Text className="text-4xl text-start text-[#121212] font-glassAntigua">
        {key}
      </Text>
      <View className="flex flex-col justify-between items-start pl-10">
        <Text className="text-3xl text-start text-[#121212] font-glassAntigua">
            {title}
        </Text>
        <Text className="text-lg text-start text-[#121212] font-mono font-extralight">
            {description}
        </Text>
      </View>
    </View>
  );
};

export default SpreadCard;
