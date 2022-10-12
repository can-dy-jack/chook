import { useEffect, useRef } from "react";

/**
 * 
 * @param {Function} func 
 * @param {number} delay 
 */
function useTimeout(func, delay) {
    const saveCallback = useRef();
    useEffect(() => {
        saveCallback.current = func;
    }, [func])

    useEffect(() => {
        function cb() {
            saveCallback.current();
        }
        if(delay != null) {
            const id = setTimeout(cb, delay);
            return () => clearTimeout(id);
        } 
    }, [delay]);
}

export default useTimeout;