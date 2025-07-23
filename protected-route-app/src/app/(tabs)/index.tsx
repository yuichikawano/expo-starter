import { View } from "react-native";
import { AppText } from "@/components/AppText";
import { Button } from "@/components/Button";
import { Link } from "expo-router";

export default function HomeScreen() {
  return (
    <View className="justify-center flex-1 p-4">
      <AppText center>Home Screen</AppText>
      <Link href="/modal" asChild push>
        <Button title="push to modal" />
      </Link>
    </View>
  );
}
