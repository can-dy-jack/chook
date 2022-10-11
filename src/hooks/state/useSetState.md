---
title: useSetState
order: 1
toc: content
---

# useSetState

管理 `object` 类型 state 的 `Hooks`，旨在于实现和 class 组件中 `this.state` 和 `this.setState` 一样的功能！ 

## 在线演示
### 原生[useState](https://reactjs.org/docs/hooks-state.html)
```jsx
import React, { useState } from 'react';

export default () => {
    const [state, setState] = useState({
        hello: "chook",
        cout: 0
    });
    const btns = {
        padding: "5px 10px",
        margin: "2px 5px",
        cursor: "pointer"
    }
    return (
        <section>
            <pre style={{
                fontFamily: "JetBrains Mono, monospace, sans-serif",
                fontSize: "1rem"
            }}>{ JSON.stringify(state, null, 4) }</pre>
            <div>
                <button style={btns} onClick={ 
                    () => setState({ hello: "hooks" }) 
                    }>set hello</button>
                <button style={btns} onClick={ 
                    () => setState({ cout: state.cout+1 }) 
                    }>add count</button>
                <button style={btns} onClick={ 
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
import useSetState from "./useSetState.js";

export default () => {
    const [state, setState] = useSetState({
        hello: "chook",
        cout: 0
    });
    const btns = {
        padding: "5px 10px",
        margin: "2px 5px",
        cursor: "pointer"
    }
    return (
        <section>
            <pre style={{
                fontFamily: "JetBrains Mono, monospace, sans-serif",
                fontSize: "1rem"
            }}>{ JSON.stringify(state, null, 4) }</pre>
            <div>
                <button style={btns} onClick={ 
                    () => setState({ hello: "hooks" }) 
                    }>set hello</button>
                <button style={btns} onClick={ 
                    () => setState({ cout: state.cout+1 }) 
                    }>add count</button>
                <button style={btns} onClick={ 
                    () => setState({ author: "kart jim" }) 
                    }>add author</button>
            </div>
        </section>
    )
}
```


## 实现源码

```jsx | pure
import { useCallback, useState } from "react";

function useSetState(initialState = {}) {
  const [state, set] = useState(initialState);
  const updateState = useCallback((patch) => {
    set((pre) => {
      return Object.assign({}, pre, patch instanceof Function ? patch(pre) : patch);
    });
  }, []);
  return [state, updateState];
}

export default useSetState;
```

## API
```js
const [state, setState] = useSetState(initialState);
```

