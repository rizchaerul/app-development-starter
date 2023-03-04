import { NextPage } from "next";
import type { AppProps } from "next/app";
import Head from "next/head";
import { Fragment, ReactElement, ReactNode, useEffect, useState } from "react";
import { silentLogin } from "src/functions/authenticationHelper";
import { createUserManager } from "src/functions/createUserManager";

import "../styles/site.scss";

/**
 * Custom AppProps type for layout support.
 */
type AppPropsWithLayout = AppProps & {
    Component: NextPageWithLayout;
};

/**
 * Custom page type for layout support.
 * Reference: https://nextjs.org/docs/basic-features/layouts
 */
export type NextPageWithLayout<T = {}> = NextPage<T> & {
    getLayout?: (page: ReactElement) => ReactNode;
};

export default function MyApp({ Component, pageProps }: AppPropsWithLayout) {
    const [loading, setLoading] = useState(true);

    const getLayout = Component.getLayout ?? ((page) => page);

    useEffect(() => {
        (async () => {
            const userManager = createUserManager();
            const user = await userManager.getUser();

            if (!user?.expired) {
                setLoading(false);
            }

            userManager.events.addAccessTokenExpiring(() => silentLogin());
            userManager.events.addAccessTokenExpired(() =>
                silentLogin(setLoading)
            );
        })();
    }, []);

    return (
        <Fragment>
            <Head>
                <title>Frontend</title>
            </Head>

            {!loading && getLayout(<Component {...pageProps} />)}
        </Fragment>
    );
}
