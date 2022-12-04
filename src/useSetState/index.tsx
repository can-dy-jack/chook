import { useCallback, useState } from "react";
import helper from "../utils/utils";

const useSetState = <S extends Record<string, any>>(initialState: S | (() => S) = {} as S): [S, Function] => {
  const [state, set] = useState(initialState);

  const updateState = useCallback((patch: any) => {
    set((pre: object | Function) => {
      let cur = helper._isFunction(patch) ? patch(pre) : patch;
      return {
        ...pre,
        ...cur
      };
    });
  }, []);
  
  return [state, updateState];
}

export default useSetState;