import { useCallback, useEffect, useState } from "react";

function useResize(): [number, number] {
  const [height, updateHeight] = useState(window.innerHeight);
  const [width, updateWidth] = useState(window.innerWidth);

  const resize = useCallback(() => {
    updateHeight(window.innerHeight);
    updateWidth(window.innerWidth)
  }, []);

  useEffect(() => {
    window.addEventListener('resize', resize);
    return () => {
      window.removeEventListener('resize', resize)
    };
  }, [window]);

  return [height, width];
}

export default useResize;
