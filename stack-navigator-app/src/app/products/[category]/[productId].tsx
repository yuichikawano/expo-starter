import { View } from "react-native";
import { AppText } from "@/components/AppText";
import { useLocalSearchParams } from "expo-router";

export default function ProductScreen() {
  const params = useLocalSearchParams();
  return (
    <View>
      <AppText center size="heading" bold>
        Product SCREEN{JSON.stringify(params)}
      </AppText>
    </View>
  );
}
