import { Text, View } from "react-native";
import { Link } from "expo-router";

export default function about() {
  return (
    <View>
        <Text>this is tina's about page</Text>
        <Link href="/"> Index</Link>
        <Link href="/home"> home</Link>
    </View>
)};
