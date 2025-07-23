import { View } from "react-native";
import { AppText } from "@/components/AppText";
import { Button } from "@/components/Button";
import { Link } from "expo-router";

export default function SecondScreen() {
  return (
    <View className="justify-center flex-1 p-4 bg-blue-400">
      <AppText center>Second SCREEN</AppText>
      <Link href={"/third"} push asChild>
        <Button title="push to third" />
      </Link>
    </View>
  );
}
