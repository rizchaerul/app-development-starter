import { UserManager, WebStorageStateStore } from "oidc-client";
import { getEnvirontmentVariables } from "./getEnvirontmentVariables";

const { apiUrl, webUrl } = getEnvirontmentVariables();

export function createUserManager() {
    return new UserManager({
        authority: apiUrl,
        client_id: "frontend",
        scope: "openid offline_access email profile api",
        response_type: "code",

        post_logout_redirect_uri: `${webUrl}`,
        redirect_uri: `${webUrl}/account/login-callback`,
        silent_redirect_uri: `${webUrl}/silent-renew.html`,

        userStore: new WebStorageStateStore({ store: localStorage }),
    });
}
