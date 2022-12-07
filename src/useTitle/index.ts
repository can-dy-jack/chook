import { useEffect } from "react";

function useTitle(text: string): void {
    useEffect(() => {
        document.title = text;
    }, [text]);
}

export default useTitle;