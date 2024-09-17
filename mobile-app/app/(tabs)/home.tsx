import { Text, View } from "react-native";
import { Link } from "expo-router";

export default function Home() {
  return (
    <View>
        <Text>this is tina's homepage</Text>
        <Link href="/"> Index</Link>
        <Link href="/about"> About</Link>
    </View>
)};
