---
title: useTitle
---
# useTitle

## 示例

```jsx
import React from "react";
import useTitle from "./useTitle.js";

export default () => {
    useTitle("custom title")
    return <span>custom title</span>
}
```
## 实现源码
```jsx | pure
const { useEffect } = require("react");

function useTitle(text) {
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

