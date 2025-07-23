import { Redirect, Slot } from "expo-router";
import { AppText } from "@/components/AppText";
import { View } from "react-native";

/**
 * Slot: 各画面を挿入するためのコンポーネント
 * @constructor
 */
export default function Layout() {
  // return <Slot />;
  /**
   * LayoutコンポーネントでSlotコンポーネントがないと中の画面が見れなくなる。
   */
  // return (
  //   <View>
  //     <AppText center size="heading" bold>
  //       Nothing to see here!
  //     </AppText>
  //   </View>
  // );

  return <Redirect href={"/second"} />;
}
