import { View } from "react-native";
import { AppText } from "@/components/AppText";
import { Link } from "expo-router";
import { Button } from "@/components/Button";

export default function SignInScreen() {
  return (
    <View className="justify-center flex-1 p-4">
      <AppText center>SignIn Screen</AppText>
      <Link href="/modal" asChild push>
        <Button title="push to modal" />
      </Link>
    </View>
  );
}
