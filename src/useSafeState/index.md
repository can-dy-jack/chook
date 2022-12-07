---
title: useSafeState
order: 4
toc: content
nav: Chook
group: state
---
# useSafeState
:::info
用法与 `React.useState` 完全一样，但是在组件卸载后异步回调内的 `setState` 不再执行，**避免因组件卸载后更新状态而导致的内存泄漏。**
:::

## 实现源码

```tsx | pure
import { useCallback, useState } from "react";
import useUnmountedRef from "../useUnmountedRef"

function useSafeState<T>(initialState: T): [T, Function] {
    const unmountRef = useUnmountedRef();
    const [state, set] = useState(initialState);
    const setState = useCallback((cur: T) => {
        if(unmountRef.current) return;
        set(cur);
    }, []);
    return [state, setState];
}

export default useSafeState;
```

## API

```js
const [state, setState] = useSafeState(initialState);
```


