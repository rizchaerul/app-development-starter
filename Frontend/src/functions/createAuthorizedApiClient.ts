import { ApiClient } from "src/clients/ApiClient";
import { createUserManager } from "./createUserManager";
import { getEnvirontmentVariables } from "./getEnvirontmentVariables";

const { apiUrl } = getEnvirontmentVariables();

function createFetcher(bearerToken: string) {
    function fetchWithAuth(
        input: RequestInfo,
        init?: RequestInit | undefined
    ): Promise<Response> {
        const headers = {
            Authorization: `Bearer ${bearerToken}`,
        };

        if (!init) {
            return fetch(input);
        } else
            return fetch(input, {
                ...init,
                headers: {
                    ...init.headers,
                    ...headers,
                },
            });
    }

    return {
        fetch: fetchWithAuth,
    };
}

export async function createAuthorizedApiClient(): Promise<ApiClient> {
    const userManager = createUserManager();
    let user = await userManager.getUser();

    if (user !== null) {
        // if expired, renew token.
        if (user.expired) {
            user = await userManager.signinSilent();
        }

        const customFetch = createFetcher(user.access_token);
        return new ApiClient(apiUrl, customFetch);
    }

    return new ApiClient(apiUrl);
}
