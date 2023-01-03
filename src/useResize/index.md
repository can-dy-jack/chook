---
title: useResize
order: 7
toc: content
nav:
  title: Chook
group:
  title: dom
---
# useResize

> 监控浏览器窗口变化

```tsx
import React from 'react';
import { useResize } from '@kartjim/chook';

export default () => {
  const [height, width] = useResize();

  return (
    <div style={{
        display: 'flex',
        flexDirection: "column",
        alignItems: 'center',
        justifyContent: 'center',
        boxShadow: '0px 0px 1px',
        width: "100%",
        height: 200,
        background: "#fafafa"
    }}>
      <p><b>width:</b> {width}</p>
      <p><b>height:</b> {height}</p>
    </div>
  );
};
```

## API
```ts
const [height, width] = useResize(): [number, number];
```
### returns
|   参数   |     说明     |                 类型                 |
| :------: | :----------: | :----------------------------------: |
| height | `window.innerHeight` 值 |              `Number`               |
| width | `window.innerWidth` 值 |              `Number`               |

## 实现源码
```ts
import { useCallback, useEffect, useState } from "react";

function useResize(): [number, number] {
  const [height, updateHeight] = useState(window.innerHeight);
  const [width, updateWidth] = useState(window.innerWidth);

  const resize = useCallback(() => {
    updateHeight(window.innerHeight);
    updateWidth(window.innerWidth)
  }, []);

  useEffect(() => {
    window.addEventListener('resize', resize);
    return () => {
      window.removeEventListener('resize', resize)
    };
  }, [window]);

  return [height, width];
}

export default useResize;
```

