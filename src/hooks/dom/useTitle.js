const { useEffect } = require("react");

/**
 * 
 * @param {string} text 
 */
function useTitle(text) {
    useEffect(() => {
        document.title = text;
    }, []);
}

export default useTitle;