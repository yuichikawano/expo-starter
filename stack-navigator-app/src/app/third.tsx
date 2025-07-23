import { View } from "react-native";
import { AppText } from "@/components/AppText";
import { Button } from "@/components/Button";
import { Link } from "expo-router";

export default function ThirdScreen() {
  return (
    <View className="justify-center flex-1 p-4 bg-green-400">
      <AppText center>THIRD SCREEN</AppText>
      <Link href={"/"} push asChild>
        <Button title="push to index" />
      </Link>

      <Link href={"/"} dismissTo asChild>
        <Button title="Dismiss to index" />
      </Link>

      <Link href={"/second"} replace asChild>
        <Button title="replace to second" />
      </Link>
    </View>
  );
}
