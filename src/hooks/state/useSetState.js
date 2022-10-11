import { useCallback, useState } from "react";

/**
 * @param {object} initialState 
 * @return [state, setState] 
 */
function useSetState(initialState = {}) {
  const [state, set] = useState(initialState);
  const updateState = useCallback((patch) => {
    set((pre) => {
      return Object.assign({}, pre, patch instanceof Function ? patch(pre) : patch);
    });
  }, []);
  return [state, updateState];
}

export default useSetState;