---
title: useClickOutside
order: 3
toc: content
nav:
  title: Chook
group:
  title: dom
---
# useClickOutside

> 监听目标元素外的点击事件

```tsx
/**
 * title: 点击按钮和其它位置试试
 * description: 点击按钮不会增加数字，而点击页面其他位置会增加数字
 */

import React, { useState } from 'react';
import { useClickOutside } from '@kartjim/chook';
import "../btn.css";

export default () => {
  const ref1 = React.useRef();
  const ref2 = React.useRef();
  const [count, setCount] = useState(0);
  const isActive = useClickOutside(
    [ref1, ref2], 
    () => setCount(count => count+1)
  );

  return (
    <div>
      <div style={{textAlign: "center"}}> -- {count} -- </div>
      <div>
        <button className="btn" ref={ref1}>button1</button>
      </div>
      <div>
        <button className="btn" ref={ref2}>button2</button>
      </div>
    </div>
  );
};
```

## API
```ts
const isActive = useClickOutside(
    refs: RefObject<HTMLElement>[],
    onClickOutside: (e: MouseEvent) => void
): boolean
```
### Params
|      参数      |                     说明                     |            类型            |
| :------------: | :------------------------------------------: | :------------------------: |
|      refs      |             传入 ref 类型的数组              | `RefObject<HTMLElement>[]` |
| onClickOutside | 当点击除给定的 ref 绑定的DOM元素外执行的函数 |         `Function`         |


## 实现源码
```ts
import { RefObject, useCallback, useState, useEffect } from "react";

function useClickOutside(
  refs: RefObject<HTMLElement>[],
  onClickOutside: (e: MouseEvent) => void
): boolean {
  const [isActive, set] = useState(false);

  const isOut = useCallback((e: MouseEvent) => {
    const all = refs.map(ref => (
      ref.current !== null && !ref.current.contains(e.target as HTMLElement)
    ))

    return all.every(Boolean);
  }, [refs])

  const mousedown = useCallback((e: MouseEvent) => {
    if(isOut(e)) {
      set(true);
      onClickOutside(e);
    }
  }, [isOut, onClickOutside]);

  const mouseup = useCallback((e: MouseEvent) => {
    if(isOut(e)) set(false);
  }, [isOut])

  useEffect(() => {
    document.addEventListener('mousedown', mousedown);
    document.addEventListener('mouseup', mouseup)

    return () => {
      document.removeEventListener('mousedown', mousedown)
      document.removeEventListener('mouseup', mouseup)
    }
  }, [refs, onClickOutside])

  return isActive;
}

export default useClickOutside;
```
