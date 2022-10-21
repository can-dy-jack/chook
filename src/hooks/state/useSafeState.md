---
title: useSafeState
---
# useSafeState
用法与 `React.useState` 完全一样，但是在组件卸载后异步回调内的 `setState` 不再执行，**避免因组件卸载后更新状态而导致的内存泄漏。**

## 实现源码

```jsx | pure
import { useCallback, useState } from "react";
import useUnmountedRef from "../LifeCycle/useUnmountedRef"

export default function useSafeState(initialState) {
    // 使用 useUnmountedRef 来判断组件是否已卸载
    const unmountRef = useUnmountedRef();
    const [state, set] = useState(initialState);
    const setState = useCallback((cur) => {
        // 已卸载则停止函数
        if(unmountRef.current) return;
        set(cur);
    })
    return [state, setState];
}
```

## API

```js
const [state, setState] = useSafeState(initialState);
```


