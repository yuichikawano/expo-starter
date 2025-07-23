import { Redirect, Stack } from "expo-router";
import React from "react";

export const unstable_settings = {
  initialRouteName: "(tabs)",
};
const isLoggedIn = false;

export default function ProtectedLayout() {
  if (!isLoggedIn) {
    return <Redirect href="/login" />;
  }
  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen
        name="modal"
        options={{
          presentation: "modal",
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="modal-with-stack"
        options={{
          presentation: "modal",
          headerShown: false,
        }}
      />
    </Stack>
  );
}
