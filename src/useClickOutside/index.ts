import { RefObject, useCallback, useState, useEffect } from "react";

function useClickOutside(
  refs: RefObject<HTMLElement>[],
  onClickOutside: (e: MouseEvent) => void
): boolean {
  const [isActive, set] = useState(false);

  const isOut = useCallback((e: MouseEvent) => {
    const all = refs.map(ref => (
      ref.current !== null && !ref.current.contains(e.target as HTMLElement)
    ))

    return all.every(Boolean);
  }, [refs])

  const mousedown = useCallback((e: MouseEvent) => {
    if(isOut(e)) {
      set(true);
      onClickOutside(e);
    }
  }, [isOut, onClickOutside]);

  const mouseup = useCallback((e: MouseEvent) => {
    if(isOut(e)) set(false);
  }, [isOut])

  useEffect(() => {
    document.addEventListener('mousedown', mousedown);
    document.addEventListener('mouseup', mouseup)

    return () => {
      document.removeEventListener('mousedown', mousedown)
      document.removeEventListener('mouseup', mouseup)
    }
  }, [refs, onClickOutside])

  return isActive;
}

export default useClickOutside;

