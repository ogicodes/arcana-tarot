import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import { Image } from "expo-image";
import ThreeCardSpread from "../../../public/images/spread.png";
import YesNoSpread from "../../../public/images/yesnospread.png";
import FiveCardSpread from "../../../public/images/fivecardspread.png";
import SevenCardSpread from "../../../public/images/sevencardspread.png";
import React, { useRef } from "react";
import CustomBottomSheet from "@/components/ui/bottomsheet/bottomsheet";
import { BottomSheetModal } from "@gorhom/bottom-sheet";
import SpreadCard from "@/components/ui/spreadcard/spreadcard";

type SpreadProps = {
  title: string;

  description: string;

  image: any;

  modal: IModalContent;
};

interface ISpread {
  title: string;
  description: string;
  image: any;
}

interface ICard {
  title: string;
  description: string;
}

interface IModalContent {
  title: string;
  description: string;
  cards?: ICard[];
}

export const spreadContents: ISpread[] = [
  {
    title: "3 Card Spread Reading",
    description:
      "The Past-Present-Future spread offers insight into your journey by revealing past influences, current situations, and potential outcomes, providing a clear snapshot of your path ahead.",
    image: ThreeCardSpread,
  },
  {
    title: "5 Card Spread",
    description:
      "The 5-card spread provides a comprehensive view by exploring past influences, current circumstances, future outcomes, challenges, and guidance. It offers a balanced reading to help navigate obstacles and make informed decisions.",
    image: FiveCardSpread,
  },
  {
    title: "7 Card Spread",
    description:
      "The 7-card spread delves deep into your situation, revealing past and present influences, future outcomes, hidden factors, and external forces. It offers advice and guidance for navigating the challenges ahead, providing a holistic view for informed decision-making.",
    image: SevenCardSpread,
  },
  {
    title: "Yes/No Spread",
    description:
      "The Yes/No spread offers a simple yet powerful answer to your question. The cards reveal a clear 'yes' or 'no,' providing guidance and clarity for your query.",
    image: YesNoSpread,
  },
];

export const modalContents: IModalContent[] = [
  {
    title: "3 Card Spread Reading",
    description:
      "The Past-Present-Future spread offers insight into your journey by revealing past influences, current situations, and potential outcomes, providing a clear snapshot of your path ahead.",
    cards: [
        {
            title: "Past",
            description:
            "The Past card represents events or influences that have shaped your current situation. It offers insight into past experiences that may be affecting your present circumstances.",
        },
        {
            title: "Present",
            description:
            "The Present card reveals your current situation and the energies surrounding you. It provides clarity on your current state of being and the challenges or opportunities you may be facing.",
        },
        {
            title: "Future",
            description:
            "The Future card offers guidance on potential outcomes and the path ahead. It helps you navigate future challenges and make informed decisions to shape your destiny.",
        },
        ],
  },
  {
    title: "5 Card Spread",
    description:
      "The 5-card spread provides a comprehensive view by exploring past influences, current circumstances, future outcomes, challenges, and guidance. It offers a balanced reading to help navigate obstacles and make informed decisions.",
    cards: [
        {
            title: "Past",
            description:
            "The Past card represents events or influences that have shaped your current situation. It offers insight into past experiences that may be affecting your present circumstances.",
        },
        {
            title: "Present",
            description:
            "The Present card reveals your current situation and the energies surrounding you. It provides clarity on your current state of being and the challenges or opportunities you may be facing.",
        },
        {
            title: "Future",
            description:
            "The Future card offers guidance on potential outcomes and the path ahead. It helps you navigate future challenges and make informed decisions to shape your destiny.",
        },
        {
            title: "Challenges",
            description:
            "The Challenges card highlights obstacles or difficulties you may encounter on your journey. It offers insight into potential roadblocks and how to overcome them.",
        },
        {
            title: "Guidance",
            description:
            "The Guidance card provides advice and support to help you navigate challenges and make decisions. It offers wisdom and direction to guide you on your path.",
        },
        ],
  },
  {
    title: "7 Card Spread",
    description:
      "The 7-card spread delves deep into your situation, revealing past and present influences, future outcomes, hidden factors, and external forces. It offers advice and guidance for navigating the challenges ahead, providing a holistic view for informed decision-making.",
    cards: [
        {
            title: "Past",
            description:
            "The Past card represents events or influences that have shaped your current situation. It offers insight into past experiences that may be affecting your present circumstances.",
        },
        {
            title: "Present",
            description:
            "The Present card reveals your current situation and the energies surrounding you. It provides clarity on your current state of being and the challenges or opportunities you may be facing.",
        },
        {
            title: "Future",
            description:
            "The Future card offers guidance on potential outcomes and the path ahead. It helps you navigate future challenges and make informed decisions to shape your destiny.",
        },
        {
            title: "Hidden Factors",
            description:
            "The Hidden Factors card uncovers unseen influences or factors that may be affecting your situation. It offers insight into hidden aspects that may impact your decisions or outcomes.",
        },
        {
            title: "External Forces",
            description:
            "The External Forces card represents external influences or energies that may be affecting your situation. It offers guidance on how to navigate external factors and make informed choices.",
        },
        {
            title: "Advice",
            description:
            "The Advice card provides wisdom and guidance to help you make informed decisions and navigate challenges. It offers support and direction to guide you on your path.",
        },
        {
            title: "Outcome",
            description:
            "The Outcome card reveals the final result or potential outcome of your situation. It offers insight into the resolution of your journey and the lessons learned along the way.",
        },
        ],
  },
  {
    title: "Yes/No Spread",
    description:
      "The Yes/No spread offers a simple yet powerful answer to your question. The cards reveal a clear 'yes' or 'no,' providing guidance and clarity for your query.",
    cards: [
        {
            title: "Yes",
            description:
            "The Yes card signifies a positive answer to your question. It indicates that the answer is 'yes' and offers guidance and support for your query.",
        },
        {
            title: "No",
            description:
            "The No card signifies a negative answer to your question. It indicates that the answer is 'no' and provides insight into the situation or factors influencing the outcome.",
        },
        ],
  },
];

const blurhash =
  "|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[";

const Spread = ({
  title,
  description,
  image,
  modal,
}: {
  title: string;
  description: string;
  image: any;
  modal: IModalContent;
}) => {
  const bottomSheetRef = useRef<BottomSheetModal>(null);

  function handlePresentModalPress() {
    bottomSheetRef.current!.present();
  }
  return (
    <>
      <TouchableOpacity
        onPress={handlePresentModalPress}
        className="flex flex-row justify-between items-center mb-12"
      >
        <View className="flex flex-row justify-between items-center">
          <Image
            source={image}
            className="w-36 h-36 ml-4"
            placeholder={{ blurhash }}
            contentFit="contain"
            transition={1000}
          />
          <View className="flex flex-col items-center justify-end w-[65%]">
            <Text className="text-4xl text-[#FEFEFF] font-glassAntigua mb-2">
              {title}
            </Text>
            <Text className="text-md font-thin text-[#FEFEFF] text-justify font-mono px-8">
              {description}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
      <CustomBottomSheet ref={bottomSheetRef}>
        <ScrollView className="mb-20">
        <View className="flex flex-col justify-between items-center mx-2 mb-10">
          <Text className="text-4xl text-start text-[#121212] font-glassAntigua mt-4">
            {modal.title}
          </Text>
            {modal.cards && modal.cards.map((card, index) => ( 
                <SpreadCard key={index.toString()} title={card.title} description={card.description} />
            ))}
          <Text className="text-3xl text-start text-[#121212] font-glassAntigua mt-4">
            Deep Dive
          </Text>
          <Text className="text-xl text-start text-[#121212] font-glassAntigua mt-4">
            {modal.description}
          </Text>
        </View>
        </ScrollView>
      </CustomBottomSheet>
    </>
  );
};

export default Spread;
