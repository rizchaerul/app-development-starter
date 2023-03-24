import { createUserManager } from "./createUserManager";

export async function silentLogin(setLoading?: (loading: boolean) => void) {
    setLoading && setLoading(true);

    const userManager = createUserManager();

    try {
        console.log("signing in silently...");
        await userManager.signinSilent();
    } catch (error) {
        console.error("error while signing in", error);

        try {
            await userManager.signoutRedirect();
        } catch {
            console.error("error while signing out", error);
        }
    }

    setLoading && setLoading(false);
}
