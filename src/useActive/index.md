---
title: useActive
order: 2
toc: content

nav:
  title: Chook
group:
  title: dom
---
# useActive
> 监控点击事件

```tsx
/**
 * title: 监控按钮点击
 * description: 点击按钮，文字会变化
 */

import React from 'react';
import { useActive } from '@kartjim/chook';
import "../btn.css";

export default () => {
  const [isActive, bind] = useActive();

  return (
    <div {...bind}>
      <button className="btn">
        You are {isActive ? 'clicking' : 'not click'}
      </button>
    </div>
  );
};
```

## 实现源码
```tsx | pure
import { useMemo, useState, MouseEvent } from "react";

function useActive() {
  const [isActive, set] = useState(false);

  const event = useMemo(
    () => {
    return {
      onMouseDown: (e: MouseEvent) => { set(true) },
      onMouseUp: (e: MouseEvent) => { set(false) }
    }
  }, []);

  return [isActive, event];
}

export default useActive;
```

## API
```js
const [isActive, bind] = useActive();
```

### returns
|   参数   |   说明   |                   类型                    |
| :------: | :------: | :---------------------------------------: |
| isActive | 是否点击 |                  Boolean                  |
|   bind   | 绑定事件 | object，事件 `onMouseDown` 和 `onMouseUp` |
