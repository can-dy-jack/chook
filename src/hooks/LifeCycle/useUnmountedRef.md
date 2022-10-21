---
title: useUnmountedRef
---
# useUnmountedRef

> 获取当前组件是否已经卸载的 Hook。应用场景：组件卸载时取消请求等

使用案例请参考 [useSafeState](../state/use-safe-state)


## 实现源码
```jsx | pure
import { useRef, useEffect } from 'react'

export default function useUnmountedRef() { 
    const ref = useRef(false);
    useEffect(() => {
        ref.current = false;
        return () => ref.current = true;
    }, [])
    return ref;
}
```


### API

```js
const unmountRef = useUnmountedRef();
```

### return


| 参数       | 说明             | 类型      |
| :----------: | :----------------: | :---------: |
| unmountRef | 组件是否已经卸载 | `boolean` |

