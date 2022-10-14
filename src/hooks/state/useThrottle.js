import { useRef } from "react";

function useThrottle (func, options = { delay: 1000 }) {
    let id = useRef(null);
    return function innerThrottle(...args) {
        if(id.current) {
            return;
        } else {
            id.current = setTimeout(() => {
                func(...args);
                id.current = null;
            }, options.delay);
        }
    }
}

export default useThrottle;