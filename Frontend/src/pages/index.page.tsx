import { NextPage } from "next";
import { User, UserManager } from "oidc-client";
import { Fragment, useEffect, useRef, useState } from "react";
import { createAuthorizedApiClient } from "src/functions/createAuthorizedApiClient";
import { createUserManager } from "src/functions/createUserManager";

const Page: NextPage = () => {
    const [user, setUser] = useState<User>();

    const userManagerRef = useRef<UserManager>();

    useEffect(() => {
        (async () => {
            const userManager = createUserManager();
            userManagerRef.current = userManager;

            const user = await userManager.getUser();
            setUser(user ?? undefined);

            if (user) {
                try {
                    const client = await createAuthorizedApiClient();
                    const result = await client.account_GetUsers(
                        undefined,
                        undefined
                    );
                    console.log(result);
                } catch (err) {
                    console.error(err);
                }
            }
        })();
    }, []);

    function logout() {
        userManagerRef.current?.signoutRedirect();
    }

    function login() {
        userManagerRef.current?.signinRedirect();
    }

    return (
        <Fragment>
            <div className="d-flex vh-100 justify-content-center align-items-center">
                {user && (
                    <div>
                        <h6>Welcome, {user.profile.name}</h6>
                        <button
                            className="btn btn-primary w-100"
                            onClick={logout}
                        >
                            Logout
                        </button>
                    </div>
                )}

                {!user && (
                    <button className="btn btn-primary" onClick={login}>
                        Login
                    </button>
                )}
            </div>
        </Fragment>
    );
};

export default Page;
