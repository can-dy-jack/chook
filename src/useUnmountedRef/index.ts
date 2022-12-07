import { useRef, useEffect } from 'react'

function useUnmountedRef() { 
    const ref = useRef(false);
    useEffect(() => {
        ref.current = false;
        return () => { ref.current = true };
    }, []);
    return ref;
}
export default useUnmountedRef;