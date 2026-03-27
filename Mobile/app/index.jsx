import { Text, View , StyleSheet} from "react-native";
import about from "./about";
import { Link } from "expo-router";
import {Image} from "expo-image"

export default function Index() {
  return (
    <View
      style={style.container}>
      <Text>Madan</Text>
      
    </View>
  );
}

const style = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#4577565",
  }
})
