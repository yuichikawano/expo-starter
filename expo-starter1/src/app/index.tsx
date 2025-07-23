import { Pressable, View } from "react-native";
import { AppText } from "@/components/AppText";
import { Link, useRouter } from "expo-router";
import { Button } from "@/components/Button";

export default function IndexScreen() {
  const router = useRouter();
  return (
    <View className="justify-center flex-1 p-4">
      <AppText center size="heading" bold>
        INDEX SCREEN
      </AppText>
      <Link href={"/second"} push>
        push to second
      </Link>
      <Button
        onPress={() => {
          router.push("/second");
        }}
        title="push to second"
      />
      <Link href={"/second"} asChild push>
        <Button title="push to second Link asChild button" />
      </Link>

      <Link href={"/second"} asChild push>
        <AppText center size="heading" bold className="bg-amber-100">
          LinkでラップしたAppText コンポーネント(Push to Second)
        </AppText>
      </Link>

      <Link href={"/second"} asChild push>
        <Pressable>
          <AppText center size="heading" bold className="bg-amber-100">
            Link+PressableでラップしたAppText コンポーネント(Push to Second)
          </AppText>
        </Pressable>
      </Link>

      <Link href={"/third"} push className="bg-amber-100">
        push to third
      </Link>

      <Link href={"/third"} asChild push>
        <Button title="push to third Link asChild push button" />
      </Link>
      <Link href={"/fifth/sixth/"} asChild push>
        <Button title="push to Deeply Nested Link asChild push button" />
      </Link>
    </View>
  );
}
