import { Text, View } from "react-native";
import about from "./about";
import { Link } from "expo-router";
import {Image} from "expo-image"

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Edit app/index.tsx to edit this screen.</Text>
      <Image source={URL="https://tse3.mm.bing.net/th/id/OIP.bsUst1JNh5eBlO8DuVdVKAHaDO?w=1380&h=600&rs=1&pid=ImgDetMain&o=7&rm=3"} style={{width:100,height:100}}></Image>
    </View>
  );
}
