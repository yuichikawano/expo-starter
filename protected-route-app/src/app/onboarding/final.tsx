import { View } from "react-native";
import { AppText } from "@/components/AppText";
import { Button } from "@/components/Button";
import { useAuthStore } from "@/utils/authStore";

export default function OnboardingFinalScreen() {
  const { completeOnboarding } = useAuthStore();
  return (
    <View className="justify-center flex-1 p-4">
      <AppText center>Onboarding Final Screen</AppText>
      <Button title="complete onboarding" onPress={completeOnboarding} />
    </View>
  );
}
