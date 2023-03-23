import { FC } from "react";
import { View } from "react-native";
import { Button } from "react-native-paper";
import { BottomTabNavigationScreenProps } from "../BottomTabNavigation";

export const HomeScreen: FC<BottomTabNavigationScreenProps<"Home">> = (
    props
) => {
    return (
        <View className="flex-1 justify-center items-center">
            <Button
                mode="contained"
                contentStyle={{ height: 48 }}
                className="mx-4 w-24"
                onPress={() => props.navigation.navigate("Profile")}
            >
                Profile
            </Button>
        </View>
    );
};
