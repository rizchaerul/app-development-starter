import { StatusBar } from "expo-status-bar";
import { Fragment } from "react";
import {
    MD2LightTheme,
    Provider as PaperProvider,
    Text
} from "react-native-paper";
import { ThemeProp } from "react-native-paper/lib/typescript/types";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import tailwindJson from "./tailwind.config";

const tailwindConfig = tailwindJson as any;

const Pallete = {
    primary: tailwindConfig.theme?.extend?.colors.primary,
    primaryVariant: tailwindConfig.theme?.extend?.colors["primary-variant"],
};

const theme: ThemeProp = {
    ...MD2LightTheme,
    colors: {
        ...MD2LightTheme.colors,
        primary: Pallete.primary,
        accent: Pallete.primary,
        background: "white",
    },
    roundness: 12,
};

export default function App() {
    return (
        <Fragment>
            <StatusBar style="light" backgroundColor={Pallete.primaryVariant} />

            <SafeAreaProvider>
                <PaperProvider theme={theme}>
                    <SafeAreaView>
                        <Text>Hello, world!</Text>
                    </SafeAreaView>
                </PaperProvider>
            </SafeAreaProvider>
        </Fragment>
    );
}
