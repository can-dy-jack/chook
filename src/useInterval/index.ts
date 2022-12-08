import { useRef, useEffect } from "react"

function useInterval(func: Function, delay: number): void {
    const saveCallback = useRef(func);

    // Remember the latest callback.
    useEffect(() => {
        saveCallback.current = func;
    }, [func])

    // Set up the interval.
    useEffect(() => {
        const cb = () => saveCallback.current();
        if(delay !== null) {
            const id = setInterval(cb, delay);
            return () => clearInterval(id);
        }
    }, [delay]);
}

export default useInterval;