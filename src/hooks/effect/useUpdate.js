import { useState } from "react";

export default function useUpdate() {
    const [_, set] = useState([]);
    return () => set([]);
}