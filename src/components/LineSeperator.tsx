import { View } from "react-native";

type LineSeperatorProps = {
  color: string;
  margin?: number;
};

export default function LineSeperator({ color, margin }: LineSeperatorProps) {
  return (
    <View
      style={{
        borderWidth: 0.5,
        marginVertical: margin || 0,
        borderColor: color,
      }}
    ></View>
  );
}
