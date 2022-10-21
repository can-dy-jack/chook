import { useCallback, useState } from "react";

export default function useSet(initalData) {
    const [set, setSet] = useState(
        new Set(initalData ? initalData : [])
    )

    const add = useCallback((any) => {
        if(set.has(any)) return;
        setSet(pre => {
            const newSet = new Set(pre);
            newSet.add(any);
            return newSet;
        })
    }),
        remove = useCallback((key) => {
            if(!set.has(key)) return;
            setSet(pre => {
                const newSet = new Set(pre);
                newSet.delete(key);
                return newSet;
            })
        }),
        reset = useCallback(() => setSet(new Set(initalData ? initalData : [])));
    return [set, { add, remove, reset }];
}
