import { useCallback, useState } from "react";
import useUnmountedRef from "../useUnmountedRef"

function useSafeState<T>(initialState: T): [T, Function] {
    const unmountRef = useUnmountedRef();
    const [state, set] = useState(initialState);
    const setState = useCallback((cur: T) => {
        if(unmountRef.current) return;
        set(cur);
    }, []);
    return [state, setState];
}

export default useSafeState;