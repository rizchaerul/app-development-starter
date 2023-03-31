import { MD2LightTheme, MD2Theme } from "react-native-paper";
import { Pallete } from "./Pallete";

export const Theme: MD2Theme = {
    ...MD2LightTheme,
    colors: {
        ...MD2LightTheme.colors,
        primary: Pallete.primary,
        accent: Pallete.accent,
        background: Pallete.background,
    },
    roundness: 6,
};
