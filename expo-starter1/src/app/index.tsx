import { View } from "react-native";
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

      <Link href={"/third"} push>
        push to third
      </Link>
    </View>
  );
}
