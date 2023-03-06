import { AppProps } from "next/app";
import { NextPageWithLayout } from "./NextPageWithLayout";

/**
 * Custom AppProps type for layout support.
 */
export type AppPropsWithLayout = AppProps & {
    Component: NextPageWithLayout;
};
