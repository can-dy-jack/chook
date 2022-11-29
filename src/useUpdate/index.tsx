import { useState } from "react";

function useUpdate():Function {
    const [_, set] = useState({});
    return () => set({});
}
export default useUpdate;