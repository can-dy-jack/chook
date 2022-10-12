import { useRef, useEffect } from "react";
/**
 * 
 * @param {Function} func 
 * @param {Number} delay 
 */

function useInterval(func, delay) {
  var saveCallback = useRef(); // Remember the latest callback.

  useEffect(function () {
    saveCallback.current = func;
  }, [func]); // Set up the interval.

  useEffect(function () {
    function cb() {
      saveCallback.current();
    }

    if (delay !== null) {
      var id = setInterval(cb, delay);
      return function () {
        return clearInterval(id);
      };
    }
  }, [delay]);
}

export default useInterval;