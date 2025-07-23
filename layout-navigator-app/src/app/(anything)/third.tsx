import { View } from "react-native";
import { AppText } from "@/components/AppText";

export default function ThirdScreen() {
  return (
    <View className="justify-center flex-1 p-4">
      <AppText center>
        <AppText center size="heading" bold>
          Third SCREEN
        </AppText>
      </AppText>
    </View>
  );
}
