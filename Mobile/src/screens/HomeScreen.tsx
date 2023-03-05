import { FC } from "react";
import { View } from "react-native";
import { Button } from "react-native-paper";
import { RootNavigationStackScreenProps } from "../../App";

export const HomeScreen: FC<RootNavigationStackScreenProps<"HomeScreen">> = (
    props
) => {
    return (
        <View className="flex-1 justify-center items-center">
            <Button
                mode="contained"
                contentStyle={{ height: 48 }}
                className="mx-4 w-24"
                onPress={() => props.navigation.navigate("ProfileScreen")}
            >
                Profile
            </Button>
        </View>
    );
};
