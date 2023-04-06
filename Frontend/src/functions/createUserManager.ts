import {
    UserManager,
    UserManagerSettings,
    WebStorageStateStore,
} from "oidc-client";

const { apiUrl, webUrl } = getEnvirontmentVariables();

const OpenIdConfiguration: UserManagerSettings = {
    authority: apiUrl,
    client_id: "frontend",
    scope: "openid offline_access email profile api",
    response_type: "code",

    post_logout_redirect_uri: `${webUrl}`,
    redirect_uri: `${webUrl}/account/login-callback`,
    silent_redirect_uri: `${webUrl}/silent-renew.html`,

    userStore:
        typeof window === "undefined"
            ? undefined
            : new WebStorageStateStore({ store: localStorage }),
};

export function createUserManager() {
    return new UserManager(OpenIdConfiguration);
}
