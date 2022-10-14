import { useRef } from "react";

function useDebounce(func, options = {
    delay: 1000,
}) {
    let id = useRef();
    return function innerDeounce(...args) {
        clearTimeout(id.current);
        id.current = setTimeout(() => {
            func(...args);
        }, options.delay);
    }
}

export default useDebounce;