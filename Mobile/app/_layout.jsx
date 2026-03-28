import { Stack,Slot } from "expo-router";
import SafeScreen from "@/component/SafeScreen";
import { ClerkProvider } from '@clerk/expo'
import { tokenCache } from '@clerk/expo/token-cache'


export default function RootLayout() {
  return <ClerkProvider ublishableKey={publishableKey} tokenCache={tokenCache}>
    <SafeAreaView>
    <Slot/>

    </SafeAreaView>
  </ClerkProvider>
}
