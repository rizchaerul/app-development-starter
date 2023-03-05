import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { FC } from "react";
import { RootNavigationStackScreenProps } from "../../RootNavigationStack";
import { AllPostScreen } from "./AllPostScreen";
import { FavoritePostScreen } from "./FavoritePostScreen";

const Tab = createMaterialTopTabNavigator();

export const ProfileScreen: FC<
    RootNavigationStackScreenProps<"ProfileScreen">
> = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen
                name="AllPostScreen"
                component={AllPostScreen}
                options={{ title: "All" }}
            />

            <Tab.Screen
                name="FavoritePostScreen"
                component={FavoritePostScreen}
                options={{ title: "Favorite" }}
            />
        </Tab.Navigator>
    );
};
