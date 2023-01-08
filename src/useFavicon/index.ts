import { useEffect } from "react";

function useFavicon(href: string, isSingle: boolean = false): void {
  useEffect(() => {
    let prevHref: string = '';
    const linkElement: HTMLLinkElement | null = document.querySelector("link[rel*='icon']");
    if(linkElement == null) {
      const newLinkElement: HTMLLinkElement = document.createElement("link");
      newLinkElement.type = "image/x-icon";
      newLinkElement.rel = "shortcut icon";
      newLinkElement.href = href;

      document.head.appendChild(newLinkElement);
    } else {
      prevHref = linkElement.href;
      linkElement.href = href;
    }
    if(isSingle) {
      return () => {
        if(linkElement && prevHref) {
          linkElement.href = prevHref;
        }
      }
    }
  }, [href])
}

export default useFavicon;
