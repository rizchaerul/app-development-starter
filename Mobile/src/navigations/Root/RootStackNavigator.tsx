import { DefaultTheme, NavigationContainer } from "@react-navigation/native";
import {
    NativeStackScreenProps,
    createNativeStackNavigator,
} from "@react-navigation/native-stack";
import { FC, Fragment } from "react";
import { Pallete } from "../../constants/Pallete";
import { RootBottomTabNavigator } from "../RootBottomTab/RootBottomTabNavigator";
import { RootStackParamList } from "./RootStackParamList";
import { ProfileScreen } from "./screens/Profile/ProfileScreen";
import { SpaceNewsScreen } from "./screens/SpaceNewsScreen";

export type RootStackScreenProps<T extends keyof RootStackParamList> =
    NativeStackScreenProps<RootStackParamList, T>;

const Stack = createNativeStackNavigator<RootStackParamList>();

export const RootStackNavigator: FC = () => {
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
                <Stack.Navigator
                    screenOptions={{
                        statusBarColor: Pallete.primaryDark,
                        navigationBarColor: "white",
                    }}
                >
                    <Stack.Screen
                        name="RootBottomTabNavigator"
                        component={RootBottomTabNavigator}
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

                    <Stack.Screen
                        name="SpaceNews"
                        component={SpaceNewsScreen}
                        options={{
                            title: "Space News",
                        }}
                    />
                </Stack.Navigator>
            </NavigationContainer>
        </Fragment>
    );
};
