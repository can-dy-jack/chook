import { useRef } from "react";

function useDebounce(func: Function, delay: number = 1000): Function {
    let id = useRef(0);
    return function innerDeounce(...args: any[]) {
        if(id.current || id.current === 0) {
            clearTimeout(id.current);
        }
        id.current = setTimeout(() => {
            func(...args);
        }, delay);
    }
}

export default useDebounce;