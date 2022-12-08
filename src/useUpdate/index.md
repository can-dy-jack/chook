---
title: useUpdate
order: 1
toc: content

nav:
  title: Chook
group:
  title: effect
  order: 2
---
# useUpdate

如果想让 react 组件重新渲染，需要更新某个 `state` 来实现；但是有时 `state` 是没必要更新的，这个时候我们就可以自定义一个 `useUpdate` hook 来优雅的实现组件的强制更新。原理就是定义一个无意义的 state ，通过更新它来实现组件重新渲染。

## 示例

```jsx
import React from 'react';
import { useUpdate } from "@kartjim/chook";

export default () => {
    const update = useUpdate();
    return (
        <section>
            <div>now: { new Date().toLocaleTimeString() }</div>
            <p>
                <button onClick={update} className="btn">useUpdate</button>
            </p>
        </section>
    )
}
```


## 实现源码
```jsx | pure
import { useState } from "react";

function useUpdate(): Function {
    const [_, set] = useState({});
    return () => set({});
}

export default useUpdate;
```

### API

```js
const update = useUpdate();
// use: update()
```

