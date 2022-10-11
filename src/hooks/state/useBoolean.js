import { useCallback, useState } from "react";

/**
 * @param {Boolean} initialValue 
 * @return [state, { set, toggle, setTrue, setFalse }] 
 */
function useBoolean(initialValue = true) {
    const [state, set] = useState(initialValue);
    return [state, {
        set,
        toggle: useCallback(() => set(i => !i), []), // i => !i 必须是个函数！
        setTrue: useCallback(() => set(true), []),
        setFalse: useCallback(() => set(false), [])
    }]
}

export default useBoolean;