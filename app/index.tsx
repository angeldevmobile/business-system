import { Redirect, Href } from "expo-router";
import { Text, View } from "react-native";

export default function Index() {
  return <Redirect href={'/home' as Href} />;
}