import { NextPage } from "next";
import { User, UserManager } from "oidc-client";
import { Fragment, useEffect, useState } from "react";
import { createApiClientWithAuth } from "src/functions/createApiClientWithAuth";
import { createUserManager } from "src/functions/createUserManager";

const IndexPage: NextPage = () => {
    const [userManager, setUserManager] = useState<UserManager>();
    const [user, setUser] = useState<User>();

    useEffect(() => {
        (async () => {
            const userManager = createUserManager();
            setUserManager(userManager);

            const user = await userManager.getUser();
            setUser(user ?? undefined);

            if (user) {
                const client = await createApiClientWithAuth();
                const result = await client.account_GetUsers(
                    undefined,
                    undefined
                );
                console.log(result);
            }
        })();
    }, []);

    async function logout() {
        if (user) {
            await userManager?.signoutRedirect();
        }
    }

    async function login() {
        if (!user) {
            await userManager?.signinRedirect();
        }
    }

    return (
        <Fragment>
            <div className="d-flex vh-100 justify-content-center align-items-center">
                {user && (
                    <div>
                        <h6>Welcome, {user.profile.email}</h6>
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

export default IndexPage;
