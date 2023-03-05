import * as NavigationBar from "expo-navigation-bar";
import { StatusBar } from "expo-status-bar";
import { Fragment, useEffect } from "react";
import { Provider as PaperProvider } from "react-native-paper";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Pallete } from "./src/constants/Pallete";
import { Theme } from "./src/constants/Theme";
import { RootNavigationStack } from "./src/navigations/Root/RootNavigationStack";

export default function App() {
    useEffect(() => {
        NavigationBar.setBackgroundColorAsync("white");
    }, []);

    return (
        <Fragment>
            <StatusBar style="light" backgroundColor={Pallete.primaryVariant} />

            <SafeAreaProvider>
                <PaperProvider theme={Theme}>
                    <RootNavigationStack />
                </PaperProvider>
            </SafeAreaProvider>
        </Fragment>
    );
}
