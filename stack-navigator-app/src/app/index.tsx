import { View } from "react-native";
import { AppText } from "@/components/AppText";
import { Link } from "expo-router";
import { Button } from "@/components/Button";

/**
 * Push
 * index -> second -> third -> index -> second ...
 */

/**
 * Dismiss
 * index -> second -> third -> dismissTo(index)
 * indexだけの履歴のない遷移となる
 *
 * index -> second -> third -> index -> second -> third -> dismissTo(index)
 * この場合、以下に戻ることになる。
 * index -> second -> third -> index
 */
export default function IndexScreen() {
  return (
    <View className="justify-center flex-1 p-4">
      <AppText center>INDEX SCREEN</AppText>
      <Link href={"/second"} push asChild>
        <Button title="push to second" />
      </Link>
      <Link href={"/third"} push asChild>
        <Button title="push to third" />
      </Link>
    </View>
  );
}
