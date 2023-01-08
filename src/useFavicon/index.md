---
title: useFavicon
order: 2
toc: content
nav: Chook
group: dom
---
# useFavicon
> 设置页面 favicon 的 Hook

## 使用示例
```tsx
import React from 'react';
import { useFavicon } from '@kartjim/chook';

export default () => {
  useFavicon(
    "https://zh-hans.reactjs.org/favicon.ico",
    true
  );

  return (
    <div>custom favicon</div>
  )
}
```

## API
```ts
useFavicon(href: string, isSingle: boolean = false): void 
```

### params

| 参数  |                说明                |   类型   |
| :---: | :--------------------------------: | :------: |
| href  | 传入 `favicon` 地址，绝对/相对地址 | `string` |
| isSingle  | 组件注销时是否恢复原 `favicon` 地址，默认为 `false` | `boolean` |

## 实现源码
```ts
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
```
