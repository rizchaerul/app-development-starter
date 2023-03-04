import type { AppProps } from "next/app";
import { Fragment, useEffect, useState } from "react";
import { silentLogin } from "src/functions/authenticationHelper";
import { createUserManager } from "src/functions/createUserManager";

import "../styles/site.scss";

export default function MyApp({ Component, pageProps }: AppProps) {
    const [ready, setReady] = useState(false);
    const [, setLoading] = useState(true);

    useEffect(() => {
        setReady(true);

        (async () => {
            const userManager = createUserManager();
            const user = await userManager.getUser();

            if (!user?.expired) {
                setLoading(false);
            }

            userManager.events.addAccessTokenExpiring(() =>
                silentLogin()
            );
            userManager.events.addAccessTokenExpired(() =>
                silentLogin(setLoading)
            );
        })();
    }, []);

    if (!ready) {
        return <Fragment />;
    }

    return <Component {...pageProps} />;
}
