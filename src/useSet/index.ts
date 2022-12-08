import { useCallback, useState } from "react";

function useSet(initalData: any[]) {
    const [set, setSet] = useState(
        new Set(initalData ? initalData : [])
    )

    const add = useCallback((item: any) => {
        if (set.has(item)) return;
        setSet(pre => {
            const newSet = new Set(pre);
            newSet.add(item);
            return newSet;
        })
    }, [initalData]),
        remove = useCallback((key: any) => {
            if (!set.has(key)) return;
            setSet(pre => {
                const newSet = new Set(pre);
                newSet.delete(key);
                return newSet;
            })
        }, [initalData]),
        reset = useCallback(() => setSet(new Set(initalData ? initalData : [])), [initalData]);
    return [set, { add, remove, reset }];
}

export default useSet;