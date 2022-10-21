import { useCallback, useState } from "react";
import useUnmountedRef from "../LifeCycle/useUnmountedRef"

export default function useSafeState(initialState) {
    const unmountRef = useUnmountedRef();
    const [state, set] = useState(initialState);
    const setState = useCallback((cur) => {
        if(unmountRef.current) return;
        set(cur);
    })
    return [state, setState];
}

