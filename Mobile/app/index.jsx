import { Text, View , StyleSheet } from "react-native";
import about from "./about";
import { Link } from "expo-router";
import {Image} from "expo-image"
import {SafeAreaView} from "react-native-safe-area-context"

export default function Index() {
  return (
    
    <View
      style={style.container}>
        <SafeAreaView>
          <Text>Madan</Text>
        </SafeAreaView>
    </View>
  );
}

const style = StyleSheet.create({
  container:{

    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "purple",
  }
})
