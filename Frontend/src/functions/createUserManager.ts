import {
    UserManager,
    UserManagerSettings,
    WebStorageStateStore,
} from "oidc-client";

const OpenIdConfiguration: UserManagerSettings = {
    authority: process.env.NEXT_PUBLIC_API_URL,
    client_id: "frontend",
    scope: "openid offline_access email profile api",
    response_type: "code",

    post_logout_redirect_uri: "http://localhost:3000",
    redirect_uri: "http://localhost:3000/account/login-callback",
    silent_redirect_uri: "http://localhost:3000/silent-renew.html",

    userStore:
        typeof window === "undefined"
            ? undefined
            : new WebStorageStateStore({ store: localStorage }),
};

export function createUserManager() {
    return new UserManager(OpenIdConfiguration);
}
