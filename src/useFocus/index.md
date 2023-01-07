---
title: useFocus
order: 5
toc: content
nav: Chook
group: dom
---
# useFocus

> 监控是否拥有焦点

```tsx
/**
 * title: 监控是否拥有焦点
 * description: input 已默认获得焦点！
 */

import React from 'react';
import { useFocus } from '@kartjim/chook';
import "../input.css";

export default () => {
  const [isActive, bind] = useFocus(true);

  return (
    <div>
      <div style={{
        background: "rgb(255, 233, 237)",
        padding: "10px",
        margin: "10px 0"
      }}>
        the input is { isActive ? "focusing" : "not focus" }
      </div>
      <input placeholder="focus" {...bind} className="input" autoFocus />
    </div>
  );
};
```
## API
```ts
const [isActive, bind] = useFocus(initialFocus: boolean = false):[
  boolean,
  {
    onFocus: (e: FocusEvent) => void,
    onBlur: (e: FocusEvent) => void
  }
]
```

### params
|      参数      |            说明             |   类型    | 默认值  |
| :------------: | :-------------------------: | :-------: | :-----: |
| `initialFocus` | 初始状态，`true` 为获得焦点 | `Boolean` | `false` |

### returns
|   参数   |     说明     |                 类型                 |
| :------: | :----------: | :----------------------------------: |
| isActive | 是否获得焦点 |              `Boolean`               |
|   bind   |   绑定事件   | `object`，事件 `onFocus` 和 `onBlur` |

## 实现源码
```ts
import { useMemo, useState } from "react";

function useFocus(initialFocus: boolean = false):[
  boolean,
  {
    onFocus: (e: FocusEvent) => void,
    onBlur: (e: FocusEvent) => void
  }
] {
  const [isFocus, set] = useState(initialFocus);

  const bind = useMemo(() => ({
    onFocus: (e: FocusEvent) => { set(true) },
    onBlur: (e: FocusEvent) => { set(false) }
  }), [])

  return [isFocus, bind];
}

export default useFocus;
```

