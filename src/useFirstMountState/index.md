---
title: useFirstMountState
order: 10
toc: content
nav: Chook
group: state
---
# useFirstMountState

> 判断组件是否是首次渲染的 `Hook` 

## 使用案例
```jsx
import React from 'react';
import { useFirstMountState } from '@kartjim/chook';

export default () => {
  const isFirstMount = useFirstMountState();

  return (
    <div>
      { isFirstMount ? "First Mount!" : "Already Update." }
    </div>
  )
}
```

## API
```ts
const isFirstMount: boolean = useFirstMountState();
```

### returns
|     参数     |       说明       |   类型    |
| :----------: | :--------------: | :-------: |
| isFirstMount | 是否是第一次渲染 | `Boolean` |

## 实现源码

```ts | pure
import { useRef } from "react";

function useFirstMountState(): boolean {
  const is_first = useRef(true);

  if(is_first.current) {
    is_first.current = false;
    return true;
  }
  return is_first.current;
}

export default useFirstMountState;
```
