import { View } from "react-native";
import { AppText } from "@/components/AppText";

export default function DeeplyNestedScreen() {
  return (
    <View className="justify-center flex-1 p-4">
      <AppText center>
        <AppText center size="heading" bold>
          Deeply Nested SCREEN
        </AppText>
      </AppText>
    </View>
  );
}
