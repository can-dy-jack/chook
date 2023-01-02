import { useMemo, useState } from "react";

function useHover(): [
  boolean,
  {
    onMouseEnter: (e: MouseEvent) => void,
    onMouseLeave: (e: MouseEvent) => void
  }
] {
  const [isActive, set] = useState(false);

  const bind = useMemo(
    () => ({
      onMouseEnter: (e: MouseEvent) => { set(true) },
      onMouseLeave: (e: MouseEvent) => { set(false) }
    }),
    []
  )

  return [isActive, bind];
}

export default useHover;
