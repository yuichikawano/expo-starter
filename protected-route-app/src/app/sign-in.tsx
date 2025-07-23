import { View } from "react-native";
import { AppText } from "@/components/AppText";
import { Link } from "expo-router";
import { Button } from "@/components/Button";
import { useAuthStore } from "@/utils/authStore";

export default function SignInScreen() {
  const { login } = useAuthStore();
  return (
    <View className="justify-center flex-1 p-4">
      <AppText center>SignIn Screen</AppText>
      <Button title="Sign in" onPress={login} />
      <Link href="/modal" asChild push>
        <Button title="push to modal" />
      </Link>
    </View>
  );
}
