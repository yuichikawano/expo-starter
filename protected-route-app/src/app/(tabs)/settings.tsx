import { View } from "react-native";
import { AppText } from "@/components/AppText";
import { Button } from "@/components/Button";
import { useAuthStore } from "@/utils/authStore";

export default function SettingsScreen() {
  const { logout } = useAuthStore();
  return (
    <View className="justify-center flex-1 p-4">
      <AppText center>Settings Screen</AppText>
      <Button title="Sign Out" onPress={logout} />
    </View>
  );
}
