import { View, Text } from 'react-native'
import React from 'react'
import { useSafeAreaFrame, useSafeAreaInsets } from 'react-native-safe-area-context'
import { Colors } from "@/constants/colors";

const SafeScreen = ({children}) => {
    const insets = useSafeAreaInsets();
  return (
    <View style={{paddingTop:insets.top, flex: 1, backgroundColor: Colors}}>
        {children}
    </View>
  )
}

export default SafeScreen