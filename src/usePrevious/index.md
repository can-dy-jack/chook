---
title: usePrevious
order: 3
toc: content

nav: Chook
group: state
---

# usePrevious

保存上一次渲染时 state 的值。


## 示例

```jsx
/**
 * title: 基础用法
 * description: 记录上次的 `count` 值
 */
import React, { useState } from 'react';
import { usePrevious } from "@kartjim/chook";
import "../btn.css";

export default () => {
    const [count, setCount] = useState(0);
    const pre = usePrevious(count);

    return (
        <section>
            <p>
                <div>pre: { pre }</div>
                <div>cur: { count }</div>
            </p>
            <p>
                <button className="btn" onClick={() => setCount(count+1)}>add</button>
                <button className="btn" onClick={() => setCount(count-1)}>reduce</button>
            </p>
        </section>
    )
}
```

## 实现源码
```tsx | pure
import { useEffect, useRef } from "react";

function usePrevious<T>(state: T): T {
    const prev = useRef(state);
    
    useEffect(() => {
        prev.current = state; 
    }, [state]);

    return prev.current;
}

export default usePrevious;
```

### API
```js
const pre = usePrevious(state);
```


