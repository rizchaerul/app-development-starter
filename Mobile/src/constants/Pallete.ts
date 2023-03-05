import tailwindConfigJs from "../../tailwind.config";

const tailwindConfig = tailwindConfigJs as any;

export const Pallete = {
    primary: tailwindConfig.theme?.extend?.colors.primary,
    primaryVariant: tailwindConfig.theme?.extend?.colors["primary-variant"],
    background: "white",
};
