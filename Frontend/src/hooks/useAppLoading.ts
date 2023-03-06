import { useAtom } from "jotai";
import { appLoadingListAtom } from "src/states/appLoadingListAtom";

export function useAppLoading(
    key: string
): [() => boolean, (loading: boolean) => void, boolean] {
    const [appLoadingList, setAppLoadingList] = useAtom(appLoadingListAtom);

    function setAppLoading(loading: boolean) {
        if (loading) {
            setAppLoadingList((x) => {
                const keyIndex = x.findIndex((y) => y === key);

                if (keyIndex === -1) {
                    return [...x, key];
                } else {
                    return x;
                }
            });
        } else {
            setAppLoadingList((x) => x.filter((y) => y !== key));
        }
    }

    function getAppLoading() {
        const keyIndex = appLoadingList.findIndex((x) => x === key);

        return keyIndex !== -1;
    }

    return [getAppLoading, setAppLoading, appLoadingList.length !== 0];
}
