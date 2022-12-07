import { useEffect } from "react";

function useUnmount(func: Function): void {
    useEffect(() => {
        return () => func();
    }, []);
}

export default useUnmount;