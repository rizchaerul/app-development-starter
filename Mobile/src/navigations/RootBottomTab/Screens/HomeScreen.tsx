import { FC } from "react";
import { View } from "react-native";
import { Button } from "react-native-paper";
import { RootBottomTabScreenProps } from "../RootBottomTabNavigator";

export const HomeScreen: FC<RootBottomTabScreenProps<"Home">> = (props) => {
    return (
        <View className="flex-1 justify-center items-center">
            <Button
                mode="contained"
                className="mx-4 w-48 mb-4"
                contentStyle={{ height: 48 }}
                onPress={() => props.navigation.navigate("Profile")}
            >
                Profile
            </Button>

            <Button
                mode="contained"
                className="mx-4 w-48"
                contentStyle={{ height: 48 }}
                onPress={() => props.navigation.navigate("SpaceNews")}
            >
                Space News
            </Button>
        </View>
    );
};
