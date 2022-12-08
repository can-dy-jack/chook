import { useRef } from "react";

function useThrottle (func: Function, delay: number = 1000): Function {
    const id = useRef(-1);
    return function innerThrottle(...args: any[]): void {
        if(id.current === -1) {
            func()
            id.current = setTimeout(() => {
                func(...args);
                id.current = -1;
            }, delay);
        }
    }
}

export default useThrottle;