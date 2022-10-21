import { useRef, useEffect } from 'react'

export default function useUnmountedRef() { 
    const ref = useRef(false);
    useEffect(() => {
        ref.current = false;
        return () => ref.current = true;
    }, [])
    return ref;
}