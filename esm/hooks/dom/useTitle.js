var _require = require("react"),
    useEffect = _require.useEffect;
/**
 * 
 * @param {string} text 
 */


function useTitle(text) {
  useEffect(function () {
    document.title = text;
  }, []);
}

export default useTitle;