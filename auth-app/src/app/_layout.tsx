import { StatusBar } from "expo-status-bar";
import { Stack } from "expo-router";
import React from "react";

export default function RootLayout() {
  return (
    <React.Fragment>
      <StatusBar style="auto" />
      <Stack>
        <Stack.Screen name="(protected)" options={{ headerShown: false }} />
      </Stack>
    </React.Fragment>
  );
}
