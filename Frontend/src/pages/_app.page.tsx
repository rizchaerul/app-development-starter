import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Head from "next/head";
import { Fragment, useEffect, useState } from "react";
import { Loading } from "src/components/Loading";
import { silentLogin } from "src/functions/authenticationHelper";
import { createUserManager } from "src/functions/createUserManager";
import { useAppLoading } from "src/hooks/useAppLoading";
import { AppPropsWithLayout } from "src/types/AppPropsWithLayout";

import "../styles/site.scss";

const queryClient = new QueryClient();

export default function MyApp({ Component, pageProps }: AppPropsWithLayout) {
    const getLayout = Component.getLayout ?? ((page) => page);

    const [getAppLoading, setAppLoading, appLoading] = useAppLoading("_app");

    const [ready, setReady] = useState(false);

    useEffect(() => {
        setReady(true);

        (async () => {
            const userManager = createUserManager();
            const user = await userManager.getUser();

            if (!user?.expired) {
                setAppLoading(false);
            }

            userManager.events.addAccessTokenExpiring(() =>
                silentLogin(setAppLoading)
            );
            userManager.events.addAccessTokenExpired(() =>
                silentLogin(setAppLoading, true)
            );
        })();
    }, []);

    return (
        <Fragment>
            <Head>
                <title>Frontend</title>
            </Head>

            <QueryClientProvider client={queryClient}>
                {ready && (
                    <Fragment>
                        <Loading loading={appLoading} />

                        {!getAppLoading() &&
                            getLayout(<Component {...pageProps} />)}
                    </Fragment>
                )}
            </QueryClientProvider>
        </Fragment>
    );
}
