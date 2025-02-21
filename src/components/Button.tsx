import { Pressable, Text } from "react-native";
import { cn } from "../utils/cn";

type ButtonProps = {
  title: string;
  onPress: () => void;
  theme?: "primary" | "secondary";
};

export function Button({ title, onPress, theme = "primary" }: ButtonProps) {
  return (
    <Pressable
      onPress={onPress}
      className={cn(
        "flex-row items-center justify-center rounded-md px-4 py-2",
        theme === "primary" && "bg-black",
        theme === "secondary" && "bg-white border border-black",
      )}
    >
      <Text
        className={cn(
          "font-bold text-lg",
          theme === "secondary" && "text-black",
          theme === "primary" && "text-white",
        )}
      >
        {title}
      </Text>
    </Pressable>
  );
}
