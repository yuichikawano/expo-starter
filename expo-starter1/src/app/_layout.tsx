import { Stack } from "expo-router";
import "../../global.css";
import React from "react";
import { StatusBar } from "expo-status-bar";

/**
 * Stackの中に全ての画面のリストを作成する必要はない。
 * ファイルシステムから自動で推測される。
 * @constructor
 */
export default function RootLayout() {
  return (
    <React.Fragment>
      <StatusBar style="auto" />
      <Stack />
    </React.Fragment>
  );
}
