import { useEffect, useRef } from "react";

function useTimeout(func: Function, delay: number): void {
    const saveCallback = useRef(func);
    useEffect(() => {
        saveCallback.current = func;
    }, [func])

    useEffect(() => {
        const cb = () => saveCallback.current();
        if(delay != null) {
            const id = setTimeout(cb, delay);
            return () => clearTimeout(id);
        } 
    }, [delay]);
}

export default useTimeout;