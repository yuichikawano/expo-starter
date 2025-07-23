import { View } from "react-native";
import { AppText } from "@/components/AppText";
import { Link } from "expo-router";

export default function IndexScreen() {
  return (
    <View className="justify-center flex-1 p-4">
      <AppText center>
        Open up <AppText bold>app/index.tsx</AppText> to start working on your
        app!
        <Link href={"/"}>index</Link>
      </AppText>
    </View>
  );
}
