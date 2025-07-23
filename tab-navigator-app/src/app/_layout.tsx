import { Tabs } from "expo-router";
import "../../global.css";
import React from "react";
import { StatusBar } from "expo-status-bar";

export default function RootLayout() {
  return (
    <React.Fragment>
      <StatusBar style="auto" />
      <Tabs>
        <Tabs.Screen name="index" options={{ title: "Index" }} />
        <Tabs.Screen name="second" options={{ title: "Second" }} />
        <Tabs.Screen name="third" options={{ title: "Third" }} />
        <Tabs.Screen name="fourth" options={{ title: "Fourth" }} />
      </Tabs>
    </React.Fragment>
  );
}
