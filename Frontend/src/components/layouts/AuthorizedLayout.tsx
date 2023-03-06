import Error from "next/error";
import { FC, Fragment, PropsWithChildren, useEffect, useState } from "react";
import { createUserManager } from "src/functions/createUserManager";
import { useAppLoading } from "src/hooks/useAppLoading";

export const AuthorizedLayout: FC<PropsWithChildren> = (props) => {
    const [authorized, setAuthorized] = useState(false);
    const [getAppLoading, setAppLoading] = useAppLoading("AuthorizedLayout");

    useEffect(() => {
        (async () => {
            setAppLoading(true);

            try {
                const userManager = createUserManager();
                const user = await userManager.getUser();

                if (user && !user.expired) {
                    setAuthorized(true);
                }
            } finally {
                setAppLoading(false);
            }
        })();
    }, []);

    return (
        <Fragment>
            {authorized && props.children}

            {!getAppLoading() && !authorized && (
                <Error
                    statusCode={401}
                    title="You're not authorized to access this page"
                />
            )}
        </Fragment>
    );
};

export function createAuthorizeLayout() {
    const getAuthorizedLayout = (page: React.ReactElement) => (
        <AuthorizedLayout>{page}</AuthorizedLayout>
    );

    return getAuthorizedLayout;
}
