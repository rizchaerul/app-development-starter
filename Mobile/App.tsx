import { PortalProvider } from "@gorhom/portal";
import * as NavigationBar from "expo-navigation-bar";
import { StatusBar } from "expo-status-bar";
import { useEffect } from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Provider as PaperProvider } from "react-native-paper";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Pallete } from "./src/constants/Pallete";
import { Theme } from "./src/constants/Theme";
import { RootStackNavigator } from "./src/navigations/Root/RootStackNavigator";

export default function App() {
    useEffect(() => {
        NavigationBar.setBackgroundColorAsync("white");
    }, []);

    return (
        <SafeAreaProvider>
            <StatusBar style="light" backgroundColor={Pallete.primaryVariant} />

            <PaperProvider theme={Theme}>
                <GestureHandlerRootView className="flex-1">
                    <PortalProvider>
                        <RootStackNavigator />
                    </PortalProvider>
                </GestureHandlerRootView>
            </PaperProvider>
        </SafeAreaProvider>
    );
}
