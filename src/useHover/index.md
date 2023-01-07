---
title: useHover
order: 6
toc: content
nav: Chook
group: dom
---
# useHover

> 鼠标是否移入

```tsx
import React from 'react';
import { useHover } from '@kartjim/chook';

export default () => {
  const [isActive, bind] = useHover();

  return (
    <div>
      <div {...bind} style={{
        cursor: "pointer",
        background: "darkblue",
        color: "#fff",
        padding: "10px"
      }}>
        the part is { isActive ? "hovering" : "not hovering" }
      </div>
    </div>
  );
};
```

## API
```ts
const [isActive, bind] = useHover(): [
  boolean,
  {
    onMouseEnter: (e: MouseEvent) => void,
    onMouseLeave: (e: MouseEvent) => void
  }
];
```

### returns
|   参数   |     说明     |                 类型                 |
| :------: | :----------: | :----------------------------------: |
| isActive | 鼠标是否移入 |              `Boolean`               |
|   bind   |   绑定事件   | `object`，事件 `onMouseEnter` 和 `onMouseLeave` |

## 实现源码
```ts
import { useMemo, useState } from "react";

function useHover(initialState: boolean = false): [
  boolean,
  {
    onMouseEnter: (e: MouseEvent) => void,
    onMouseLeave: (e: MouseEvent) => void
  }
] {
  const [isActive, set] = useState(initialState);

  const bind = useMemo(
    () => ({
      onMouseEnter: (e: MouseEvent) => { set(true) },
      onMouseLeave: (e: MouseEvent) => { set(false) }
    }),
    []
  )

  return [isActive, bind];
}

export default useHover;
```

