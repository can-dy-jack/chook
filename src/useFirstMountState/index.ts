import { useRef } from "react";

function useFirstMountState(): boolean {
  const is_first = useRef(true);

  if(is_first.current) {
    is_first.current = false;
    return true;
  }
  return is_first.current; // return false;
}

export default useFirstMountState;
