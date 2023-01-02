---
title: useMousePosition
order: 6
toc: content
nav:
  title: Chook
group:
  title: dom
---
# useMousePosition

> 获取鼠标的 `offsetX` 和 `offsetY` 值

```tsx
import React from 'react';
import { useMousePosition } from '@kartjim/chook';

export default () => {
  const [x, y, bind] = useMousePosition()
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        boxShadow: '0px 0px 1px',
        width: "100%",
        height: 200,
        cursor: 'move',
        background: "#fafafa"
      }}
      {...bind}
    >
      <b>x:</b> {x}  - <b>y:</b> {y}
    </div>
  )
};
```

## API
```ts
const [x, y, bind] = useMousePosition(): [
  number,
  number,
  { onMouseMove: (e: React.MouseEvent) => void }
]
```

### returns
|   参数   |     说明     |                 类型                 |
| :------: | :----------: | :----------------------------------: |
| x | `offsetX` 值 |              `Number`               |
| x | `offsetY` 值 |              `Number`               |
|   bind   |   绑定事件   | `object`，事件 `onMouseMove` |

## 实现源码
```ts
import { useState, useMemo, MouseEvent } from 'react';

function useMousePosition(): [
  number,
  number,
  { onMouseMove: (e: MouseEvent) => void }
] {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  const bind = useMemo(
    () => ({
      onMouseMove: (e: MouseEvent) => {
        setX(e.nativeEvent.offsetX);
        setY(e.nativeEvent.offsetY);
      }
    }),
    []
  )

  return [x, y, bind];
}
export default useMousePosition;
```
