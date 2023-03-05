import { DefaultTheme, NavigationContainer } from "@react-navigation/native";
import {
    createNativeStackNavigator,
    NativeStackScreenProps
} from "@react-navigation/native-stack";
import * as NavigationBar from "expo-navigation-bar";
import { StatusBar } from "expo-status-bar";
import { Fragment, useEffect } from "react";
import { MD2LightTheme, Provider as PaperProvider } from "react-native-paper";
import { MD2Theme } from "react-native-paper/lib/typescript/types";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { HomeScreen } from "./src/screens/HomeScreen";
import { ProfileScreen } from "./src/screens/ProfileScreen";
import tailwindJson from "./tailwind.config";

const tailwindConfig = tailwindJson as any;

const Pallete = {
    primary: tailwindConfig.theme?.extend?.colors.primary,
    primaryVariant: tailwindConfig.theme?.extend?.colors["primary-variant"],
    background: "white",
};

const theme: MD2Theme = {
    ...MD2LightTheme,
    colors: {
        ...MD2LightTheme.colors,
        primary: Pallete.primary,
        accent: Pallete.primary,
        background: Pallete.background,
    },
    roundness: 12,
};

export type RootNavigationStackParams = {
    HomeScreen: undefined;
    ProfileScreen: undefined;
};

export type RootNavigationStackScreenProps<
    T extends keyof RootNavigationStackParams
> = NativeStackScreenProps<RootNavigationStackParams, T>;

const Stack = createNativeStackNavigator<RootNavigationStackParams>();

export default function App() {
    useEffect(() => {
        NavigationBar.setBackgroundColorAsync("white");
    }, []);

    return (
        <Fragment>
            <StatusBar style="light" backgroundColor={Pallete.primaryVariant} />

            <SafeAreaProvider>
                <PaperProvider theme={theme}>
                    <NavigationContainer
                        theme={{
                            ...DefaultTheme,
                            colors: {
                                ...DefaultTheme.colors,
                                primary: Pallete.primary,
                                background: Pallete.background,
                            },
                        }}
                    >
                        <Stack.Navigator>
                            <Stack.Screen
                                name="HomeScreen"
                                component={HomeScreen}
                                options={{
                                    headerTransparent: true,
                                    title: "",
                                }}
                            />
                            <Stack.Screen
                                name="ProfileScreen"
                                component={ProfileScreen}
                                options={{
                                    title: "Profile",
                                    headerTitleAlign: "center",
                                    headerShadowVisible: false,
                                }}
                            />
                        </Stack.Navigator>
                    </NavigationContainer>
                </PaperProvider>
            </SafeAreaProvider>
        </Fragment>
    );
}
