---
title: useTitle
order: 1
toc: content
nav:  Chook
group:
  title: dom
  order: 4
---

## 示例

```jsx
import React from "react";
import { useTitle } from "chook";

export default () => {
    useTitle("custom title");
    return <span>custom title</span>
}
```
## 实现源码
```jsx | pure
import { useEffect } from "react";

function useTitle(text: string): void {
    useEffect(() => {
        document.title = text;
    }, []);
}

export default useTitle;
```

## API
```js
useTitle()
```

