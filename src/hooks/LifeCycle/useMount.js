import { useEffect } from "react";

function useMount(func) {
    useEffect(() => {
        func();
    });
}

export default useMount;