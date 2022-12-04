import { useCallback, useState } from "react";

function useBoolean(initialValue: boolean = true): [boolean, {
    set: Function,
    toggle: Function,
    setTrue: Function,
    setFalse: Function
}] {
    const [state, set] = useState(initialValue);
    return [state, {
        set,
        toggle: useCallback(() => set(i => !i), []),
        setTrue: useCallback(() => set(true), []),
        setFalse: useCallback(() => set(false), [])
    }]
}

export default useBoolean;