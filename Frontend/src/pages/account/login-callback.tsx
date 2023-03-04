import { NextPage } from "next";
import { Fragment, useEffect } from "react";
import { createUserManager } from "src/functions/createUserManager";

const LoginCallbackPage: NextPage = () => {
    const handleLogin = async () => {
        const userManager = createUserManager();
        const user = await userManager.getUser();

        if (!user) {
            await userManager.signinCallback();
        }

        window.location.href = "/";
    };

    useEffect(() => {
        handleLogin();
    }, []);

    return <Fragment />;
};

export default LoginCallbackPage;
