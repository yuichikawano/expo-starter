import { View } from "react-native";
import { AppText } from "@/components/AppText";
import { Link } from "expo-router";
import { Button } from "@/components/Button";

export default function SecondScreen() {
  return (
    <View className="justify-center flex-1 p-4">
      <AppText center>Second Screen</AppText>
      <Link href={"/second/nested"} push asChild>
        <Button title="push to /second/nested" />
      </Link>
    </View>
  );
}
