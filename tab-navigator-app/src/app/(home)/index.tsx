import { View } from "react-native";
import { AppText } from "@/components/AppText";
import { Button } from "@/components/Button";
import { Link } from "expo-router";

export default function IndexScreen() {
  return (
    <View className="justify-center flex-1 p-4">
      <AppText center>Index Screen</AppText>
      <Link href={"/home-nested"} push asChild>
        <Button title="push to /home-nested" />
      </Link>
    </View>
  );
}
