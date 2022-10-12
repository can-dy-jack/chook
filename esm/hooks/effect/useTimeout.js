import { useEffect, useRef } from "react";
/**
 * 
 * @param {Function} func 
 * @param {number} delay 
 */

function useTimeout(func, delay) {
  var saveCallback = useRef();
  useEffect(function () {
    saveCallback.current = func;
  }, [func]);
  useEffect(function () {
    function cb() {
      saveCallback.current();
    }

    if (delay != null) {
      var id = setTimeout(cb, delay);
      return function () {
        return clearTimeout(id);
      };
    }
  }, [delay]);
}

export default useTimeout;