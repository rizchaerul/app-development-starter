import tailwindConfigJs from "../../tailwind.config";

const tailwindConfig = tailwindConfigJs as any;

export const Pallete = {
    primary: tailwindConfig.theme?.extend?.colors.primary,
    primaryDark: tailwindConfig.theme?.extend?.colors["primary-dark"],
    primaryLight: tailwindConfig.theme?.extend?.colors["primary-light"],
    accent: tailwindConfig.theme?.extend?.colors.accent,
    accentDark: tailwindConfig.theme?.extend?.colors["accent-dark"],
    accentLight: tailwindConfig.theme?.extend?.colors["accent-light"],
    background: "white",
};
