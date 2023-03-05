import { DefaultTheme, NavigationContainer } from "@react-navigation/native";
import {
    createNativeStackNavigator,
    NativeStackScreenProps
} from "@react-navigation/native-stack";
import { FC, Fragment } from "react";
import { Pallete } from "../../constants/Pallete";
import { RootNavigationStackParams } from "./RootNavigationStackParams";
import { HomeScreen } from "./screens/HomeScreen";
import { ProfileScreen } from "./screens/Profile/ProfileScreen";

export type RootNavigationStackScreenProps<
    T extends keyof RootNavigationStackParams
> = NativeStackScreenProps<RootNavigationStackParams, T>;

const Stack = createNativeStackNavigator<RootNavigationStackParams>();

export const RootNavigationStack: FC = () => {
    return (
        <Fragment>
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
        </Fragment>
    );
};
