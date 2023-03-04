import { ApiClient } from "src/clients/ApiClient";
import { createUserManager } from "./createUserManager";

const baseUrl = process.env.NEXT_PUBLIC_API_URL;

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

export async function createApiClientWithAuth(): Promise<ApiClient> {
    const userManager = createUserManager();
    let user = await userManager.getUser();

    if (user !== null) {
        // if expired, renew token.
        if (user.expired) {
            user = await userManager.signinSilent();
        }

        const customFetch = createFetcher(user.access_token);
        return new ApiClient(baseUrl, customFetch);
    }

    return new ApiClient(baseUrl);
}
