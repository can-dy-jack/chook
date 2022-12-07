import { useEffect, useRef } from "react";

function usePrevious<T>(state: T): T {
    const prev = useRef(state);
    
    useEffect(() => {
        prev.current = state; 
    }, [state]);

    return prev.current;
}

export default usePrevious;