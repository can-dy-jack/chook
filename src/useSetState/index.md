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

原生 `useState` 在管理 `object` 类型的 `state` 时，每次更新 `state` 都是直接替换原来的 `object` ，而不是覆盖原来的属性。

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
和 class 组件中 `this.state` 和 `this.setState` 一样管理 `object` 类型的 `state` 。
```jsx
import React from 'react';
import { useSetState } from '@kartjim/chook';

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

## 实现源码
```jsx | pure 
import { useCallback, useState } from "react";

const useSetState = <S extends Record<string, any>>(initialState: S | (() => S) = {} as S): [S, Function] => {
  const [state, set] = useState(initialState);

  const updateState = useCallback((patch: any) => {
    set((pre: object | Function) => {
      let cur = typeof patch === 'function' ? patch(pre) : patch
      return {
        ...pre,
        ...cur
      };
    });
  }, []);
  return [state, updateState];
}

export default useSetState;
```

## API
```js | pure
const [state, setState] = useSetState(initialState);
```

