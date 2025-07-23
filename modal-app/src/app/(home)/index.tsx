import { Alert, View } from "react-native";
import { AppText } from "@/components/AppText";
import { Button } from "@/components/Button";
import { Link, useRouter } from "expo-router";

export default function IndexScreen() {
  const router = useRouter();
  const canGoBack = router.canGoBack();
  const handleOpenAlert = () => {
    // Alert.alert("Alert Title");
    Alert.alert("Alert Title", "Alert Message", [
      {
        text: "Cancel",
        style: "cancel",
        onPress: () => console.log("Cancel Pressed"),
      },
      {
        text: "OK",
        onPress: () => console.log("OK Pressed"),
        style: "destructive",
      },
    ]);
  };
  return (
    <View className="justify-center flex-1 p-4">
      <AppText center>Index Screen</AppText>
      <Link href={"/home-nested"} push asChild>
        <Button title="push to /home-nested" />
      </Link>
      {canGoBack ? (
        <Button
          title="Back"
          theme="secondary"
          onPress={() => {
            router.back();
          }}
        />
      ) : null}
      <Button
        title="Open Alert"
        theme="secondary"
        onPress={() => {
          handleOpenAlert();
        }}
      />
    </View>
  );
}
