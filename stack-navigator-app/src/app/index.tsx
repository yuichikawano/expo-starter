import { View } from "react-native";
import { AppText } from "@/components/AppText";
import { Link } from "expo-router";
import { Button } from "@/components/Button";

/**
 * Push: 履歴を追加する
 * index -> second -> third -> index -> second ...
 */

/**
 * Dismiss: 直近の指定された画面まで履歴を削除する
 * index -> second -> third -> dismissTo(index)
 * indexだけの履歴のない遷移となる
 *
 * index -> second -> third -> index -> second -> third -> dismissTo(index)
 * この場合、以下に戻ることになる。
 * index -> second -> third -> index
 */

/**
 * Replace:履歴を置き換える
 * index -> second -> third -> replace(index)
 * index -> second -> second
 */

/**
 * navigate(pre-SDK 52 / react navigation v7)の挙動
 * index -> second -> third -> navigate(index)
 * index
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
