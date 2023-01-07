import { useEffect } from "react";

function useFavicon(href: string): void {
  useEffect(() => {
    const linkElement: HTMLLinkElement | null = document.querySelector("link[rel*='icon']");
    if(linkElement == null) {
      const newLinkElement: HTMLLinkElement = document.createElement("link");
      newLinkElement.type = "image/x-icon";
      newLinkElement.rel = "shortcut icon";
      newLinkElement.href = href;

      document.head.appendChild(newLinkElement);
    } else {
      linkElement.href = href;
    }
  }, [href])
}

export default useFavicon;
