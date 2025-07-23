import { View } from "react-native";
import { AppText } from "@/components/AppText";
import { useSearchParams } from "expo-router/build/hooks";
import { Stack, useLocalSearchParams } from "expo-router";

export default function ProverbScreen() {
  const proverbs = [
    {
      id: 1,
      proverb: "The best way to predict your future is to create it.",
      source: "Abraham Lincoln",
    },
    {
      id: 2,
      proverb: "Believe you can and you are half way there.",
      source: "Theodore Roosevelt",
    },
    {
      id: 3,
      proverb:
        "It does not matter how slowly you go as long as you do not stop.",
      source: "Confucius",
    },
    {
      id: 4,
      proverb:
        "Success is not final, failure is not fatal: It is the courage to continue that counts.",
      source: "Winston Churchill",
    },
    {
      id: 5,
      proverb: "Don t watch the clock; do what it does. Keep going.",
      source: "Sam Levenson",
    },
    {
      id: 6,
      proverb: "You miss 100% of the shots you don t take.",
      source: "Wayne Gretzky",
    },
    {
      id: 7,
      proverb:
        "Success is not about being better than anyone else, it s about being better than you used to be.",
      source: "Anonymous",
    },
    {
      id: 8,
      proverb: "Keep your eyes on the stars, and your feet on the ground.",
      source: "Theodore Roosevelt",
    },
    {
      id: 9,
      proverb:
        "You are never too old to set another goal or to dream a new dream.",
      source: "C.S. Lewis",
    },
    {
      id: 10,
      proverb: "The only way to do great work is to love what you do.",
      source: "Steve Jobs",
    },
  ];
  const { id } = useLocalSearchParams<{ id?: string }>();
  const proverb = proverbs.find((p) => p.id === Number(id));
  if (!proverb) {
    return (
      <View>
        <AppText>Not found</AppText>
      </View>
    );
  }
  return (
    <View className="justify-center flex-1 p-4">
      <Stack.Screen options={{ title: proverb.source }} />
      <AppText center>
        <AppText center size="heading" bold>
          "{proverb.proverb}"
        </AppText>
        <AppText center size="medium" bold>
          - {proverb.source}
        </AppText>
      </AppText>
    </View>
  );
}
