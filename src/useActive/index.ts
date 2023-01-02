import { useMemo, useState, MouseEvent } from "react";

function useActive() {
  const [isActive, set] = useState(false);

  const event = useMemo(
    () => {
    return {
      onMouseDown: (e: MouseEvent) => { set(true) },
      onMouseUp: (e: MouseEvent) => { set(false) }
    }
  }, []);

  return [isActive, event];
}

export default useActive;
