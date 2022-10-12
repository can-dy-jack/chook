import { useRef, useEffect } from "react"

/**
 * 
 * @param {Function} func 
 * @param {Number} delay 
 */
function useInterval(func, delay) {
    const saveCallback = useRef();

    // Remember the latest callback.
    useEffect(() => {
        saveCallback.current = func;
    }, [func])

    // Set up the interval.
    useEffect(() => {
        function cb() {
            saveCallback.current();
        }
        if(delay !== null) {
            const id = setInterval(cb, delay);
            return () => clearInterval(id);
        }
    }, [delay]);
}

export default useInterval;
