import { View } from "react-native";
import { AppText } from "@/components/AppText";
import { Link } from "expo-router";
import { Button } from "@/components/Button";

export default function OnboardingFirstScreen() {
  return (
    <View className="justify-center flex-1 p-4">
      <AppText center>Onboarding First Screen</AppText>
      <Link href="/onboarding/final" asChild push>
        <Button title="push to /onboarding/second" />
      </Link>
    </View>
  );
}
