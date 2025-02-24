import { StatusBar } from "expo-status-bar";
import { View } from "react-native";
import { AppText } from "@/components/AppText";

export default function App() {
  return (
    <View className="items-center justify-center flex-1 p-4">
      <AppText center>
        Open up <AppText bold>app/index.tsx</AppText> to start working on your
        app!
      </AppText>
      <StatusBar style="auto" />
    </View>
  );
}
