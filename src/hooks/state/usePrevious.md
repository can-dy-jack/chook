---
title: usePrevious
order: 3
---
# usePrevious

保存上一次渲染时 state 的值。


## 示例

```jsx
/**
 * title: 基础用法
 * desc: 记录上次的 `count` 值
 */
import React, { useState } from "react";
import usePrevious from "./usePrevious";
import "../buttonic-tiny.css";

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
                <button className="btnic-push" onClick={() => setCount(count+1)}>add</button>
                <button className="btnic-push" onClick={() => setCount(count-1)}>reduce</button>
            </p>
        </section>
    )
}
```

## 实现源码
```jsx | pure
import { useEffect, useRef } from "react";

function usePrevious(state) {
    const prev = useRef();
    
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
