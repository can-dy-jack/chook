import { useState, useMemo, MouseEvent } from 'react';

function useMousePosition(): [
  number,
  number,
  { onMouseMove: (e: MouseEvent) => void }
] {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  const bind = useMemo(
    () => ({
      onMouseMove: (e: MouseEvent) => {
        setX(e.nativeEvent.offsetX);
        setY(e.nativeEvent.offsetY);
      }
    }),
    []
  )

  return [x, y, bind];
}
export default useMousePosition;
