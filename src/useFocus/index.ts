import { useMemo, useState } from "react";

function useFocus(initialFocus: boolean = false):[
  boolean,
  {
    onFocus: (e: FocusEvent) => void,
    onBlur: (e: FocusEvent) => void
  }
] {
  const [isFocus, set] = useState(initialFocus);

  const bind = useMemo(() => ({
    onFocus: (e: FocusEvent) => { set(true) },
    onBlur: (e: FocusEvent) => { set(false) }
  }), [])

  return [isFocus, bind];
}

export default useFocus;
