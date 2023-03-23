import { DefaultTheme, NavigationContainer } from "@react-navigation/native";
import {
    createNativeStackNavigator,
    NativeStackScreenProps,
} from "@react-navigation/native-stack";
import { FC, Fragment } from "react";
import { Pallete } from "../../constants/Pallete";
import { BottomTabNavigation } from "../BottomTab/BottomTabNavigation";
import { RootStackNavigationParams } from "./RootStackNavigationParams";
import { ProfileScreen } from "./screens/Profile/ProfileScreen";

export type RootNavigationStackScreenProps<
    T extends keyof RootStackNavigationParams
> = NativeStackScreenProps<RootStackNavigationParams, T>;

const Stack = createNativeStackNavigator<RootStackNavigationParams>();

export const RootStackNavigation: FC = () => {
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
                        name="BottomTabNavigation"
                        component={BottomTabNavigation}
                        options={{
                            headerShown: false,
                        }}
                    />
                    <Stack.Screen
                        name="Profile"
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
