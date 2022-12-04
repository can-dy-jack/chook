import { useEffect } from "react";

function useMount(func: Function): void {
    useEffect(() => {
        func();
    }, []);
}

export default useMount;