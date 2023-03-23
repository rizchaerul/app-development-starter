import { StyleProp, ViewStyle } from "react-native";

export function generateShadow(elevation: number) {
    if (elevation > 0) {
        const styles: StyleProp<ViewStyle> = {
            shadowColor: "#000",
            shadowOffset: {
                width: 0,
                height: Math.floor(elevation),
            },
            shadowOpacity: elevation / 40,
            shadowRadius: elevation / 5,

            elevation: elevation,
        };

        return styles;
    } else {
        const styles: StyleProp<ViewStyle> = {
            elevation: 0,
        };

        return styles;
    }
}
