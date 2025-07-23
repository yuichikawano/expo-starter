import { Slot } from "expo-router";
import { AppText } from "@/components/AppText";
import { View } from "react-native";

export default function Layout() {
  return <Slot />;

  // return (
  //   <View>
  //     <AppText center size="heading" bold>
  //       途中のレイアウトファイルで止める
  //     </AppText>
  //   </View>
  // );
}
