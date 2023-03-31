import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import * as NavigationBar from "expo-navigation-bar";
import { StatusBar } from "expo-status-bar";
import { useEffect } from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Provider as PaperProvider } from "react-native-paper";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Pallete } from "./src/constants/Pallete";
import { Theme } from "./src/constants/Theme";
import { RootStackNavigator } from "./src/navigations/Root/RootStackNavigator";

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            cacheTime: 0,
        },
    },
});

export default function App() {
    useEffect(() => {
        NavigationBar.setBackgroundColorAsync("white");
    }, []);

    return (
        <QueryClientProvider client={queryClient}>
            <SafeAreaProvider>
                <StatusBar
                    style="light"
                    backgroundColor={Pallete.primaryDark}
                />

                <GestureHandlerRootView className="flex-1">
                    <PaperProvider theme={Theme}>
                        <RootStackNavigator />
                    </PaperProvider>
                </GestureHandlerRootView>
            </SafeAreaProvider>
        </QueryClientProvider>
    );
}
