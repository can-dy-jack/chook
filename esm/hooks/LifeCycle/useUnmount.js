import { useEffect } from "react";
/**
 * 
 * @param {Function} func 
 */

function useUnmount(func) {
  useEffect(function () {
    return function () {
      return func();
    };
  });
}

export default useUnmount;