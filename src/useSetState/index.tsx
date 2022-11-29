import { useCallback, useState } from "react";
import helper from "../utils/utils";

// export type SetState<S extends Record<string, any>> = <K extends keyof S>(
//   state: Pick<S, K> | null | ((prevState: Readonly<S>) => Pick<S, K> | S | null),
// ) => void;

function useSetState (initialState = {}) {
  const [state, set] = useState(initialState);
  const updateState = useCallback((patch: any) => {
    set((pre) => {
        let ans = helper._isFunction(patch) ? patch(pre) : patch
      return {
        ...pre,
        ...ans
      };
    });
  }, []);
  return [state, updateState];
}

export default useSetState;