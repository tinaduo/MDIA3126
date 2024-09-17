import { Text, View } from "react-native";
import { Link } from "expo-router";

export default function index() {
  return (
    <View>
        <Text>this is tina's index page</Text>
        <Link href="/home"> Home</Link>
        <Link href="/about"> About</Link>
    </View>
)};
