import { useState } from "react";

type UseUpdate = () => Function

const useUpdate: UseUpdate = () => {
    const [_, set] = useState({});
    return () => set({});
}

export default useUpdate;