import { Ionicons } from "@expo/vector-icons";
import {
    BottomTabScreenProps,
    createBottomTabNavigator,
} from "@react-navigation/bottom-tabs";
import { FC, Fragment } from "react";
import { RootBottomTabParamList } from "./RootBottomTabParamList";
import { HomeScreen } from "./Screens/HomeScreen";
import { SettingsScreen } from "./Screens/SettingsScreen";

export type RootBottomTabScreenProps<T extends keyof RootBottomTabParamList> =
    BottomTabScreenProps<RootBottomTabParamList, T>;

const Tab = createBottomTabNavigator<RootBottomTabParamList>();

export const RootBottomTabNavigator: FC = () => {
    return (
        <Fragment>
            <Tab.Navigator
                screenOptions={({ route }) => ({
                    tabBarHideOnKeyboard: true,
                    tabBarIcon: ({ focused, color, size }) => {
                        let iconName: any;

                        if (route.name === "Home") {
                            iconName = focused
                                ? "ios-home"
                                : "ios-home-outline";
                        } else if (route.name === "Settings") {
                            iconName = focused
                                ? "ios-list"
                                : "ios-list-outline";
                        }

                        return (
                            <Ionicons
                                name={iconName}
                                size={size}
                                color={color}
                            />
                        );
                    },
                })}
            >
                <Tab.Screen
                    name="Home"
                    component={HomeScreen}
                    options={{
                        headerShown: false,
                    }}
                />

                <Tab.Screen
                    name="Settings"
                    component={SettingsScreen}
                    options={{
                        headerShown: false,
                    }}
                />
            </Tab.Navigator>
        </Fragment>
    );
};
