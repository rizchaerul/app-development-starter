import { NextPage } from "next";
import { ReactElement, ReactNode } from "react";

/**
 * Custom page type for layout support.
 * Reference: https://nextjs.org/docs/basic-features/layouts
 */
export type NextPageWithLayout<T = {}> = NextPage<T> & {
    getLayout?: (page: ReactElement) => ReactNode;
};
