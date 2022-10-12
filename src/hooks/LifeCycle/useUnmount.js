import { useEffect } from "react";

/**
 * 
 * @param {Function} func 
 */
function useUnmount(func) {
    useEffect(() => {
        return () => func();
    })
}

export default useUnmount;