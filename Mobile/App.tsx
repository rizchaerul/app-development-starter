import * as NavigationBar from "expo-navigation-bar";
import { StatusBar } from "expo-status-bar";
import { Fragment, useEffect } from "react";
import { Provider as PaperProvider } from "react-native-paper";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Pallete } from "./src/constants/Pallete";
import { Theme } from "./src/constants/Theme";
import { RootStackNavigation } from "./src/navigations/Root/RootStackNavigation";

export default function App() {
    useEffect(() => {
        NavigationBar.setBackgroundColorAsync("white");
    }, []);

    return (
        <Fragment>
            <StatusBar style="light" backgroundColor={Pallete.primaryVariant} />

            <SafeAreaProvider>
                <PaperProvider theme={Theme}>
                    <RootStackNavigation />
                </PaperProvider>
            </SafeAreaProvider>
        </Fragment>
    );
}
