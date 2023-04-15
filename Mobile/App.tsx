import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Provider as PaperProvider } from "react-native-paper";
import { SafeAreaProvider } from "react-native-safe-area-context";
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
    return (
        <QueryClientProvider client={queryClient}>
            <SafeAreaProvider>
                <GestureHandlerRootView className="flex-1">
                    <PaperProvider theme={Theme}>
                        <RootStackNavigator />
                    </PaperProvider>
                </GestureHandlerRootView>
            </SafeAreaProvider>
        </QueryClientProvider>
    );
}
