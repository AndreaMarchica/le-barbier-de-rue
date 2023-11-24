import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import styles from "./styles/styles.js";
import Homepage from "./screens/Homepage.js";

export default function App() {
  return (
    <View style={styles.container}>
      <Homepage></Homepage>
      <StatusBar style="auto" />
    </View>
  );
}
