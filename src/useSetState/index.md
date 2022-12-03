---
title: useSetState
order: 1
toc: content

nav:
  title: Chook
  order: 1
group:
  title: state
  order: 1
---

# useSetState

管理 `object` 类型 state 的 `Hooks`，旨在于实现和 class 组件中 `this.state` 和 `this.setState` 一样的功能！ 

## 在线演示
### 原生[useState](https://reactjs.org/docs/hooks-state.html)
```jsx
import React, { useState } from 'react';
import "../btn.css";

export default () => {
    const [state, setState] = useState({
        hello: "chook",
        cout: 0
    });
    return (
        <section>
            <pre style={{
                fontFamily: "JetBrains Mono, monospace, sans-serif",
                fontSize: "1rem"
            }}>{ JSON.stringify(state, null, 4) }</pre>
            <div>
                <button className="btn" onClick={ 
                    () => setState({ hello: "hooks" }) 
                    }>set hello</button>
                <button className="btn" onClick={ 
                    () => setState({ cout: state.cout+1 }) 
                    }>add count</button>
                <button className="btn" onClick={ 
                    () => setState({ author: "kart jim" }) 
                    }>add author</button>
            </div>
        </section>
    )
}
```

### 使用`useSetState`
```jsx
import React from 'react';
import { useSetState } from 'chook';

export default () => {
    const [state, setState] = useSetState({
        hello: "chook",
        cout: 0
    });
    return (
        <section>
            <pre style={{
                fontFamily: "JetBrains Mono, monospace, sans-serif",
                fontSize: "1rem"
            }}>{ JSON.stringify(state, null, 4) }</pre>
            <div>
                <button className="btn" onClick={ 
                    () => setState({ hello: "hooks" }) 
                    }>set hello</button>
                <button className="btn" onClick={ 
                    () => setState({ cout: state.cout+1 }) 
                    }>add count</button>
                <button className="btn" onClick={ 
                    () => setState({ author: "kart jim" }) 
                    }>add author</button>
            </div>
        </section>
    )
}
```


```jsx
import React from 'react';
import { helper } from "chook"

export default () => (
    <div>
        { helper._tail([1,2,3,4,5])}
    </div>
)
```


