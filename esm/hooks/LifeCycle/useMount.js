import { useEffect } from "react";

function useMount(func) {
  useEffect(function () {
    func();
  });
}

export default useMount;