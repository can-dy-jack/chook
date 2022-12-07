---
title: useUnmountedRef
order: 3
toc: content
nav: Chook
group: LifeCycle
---
# useUnmountedRef

> 获取当前组件是否已经卸载的 Hook。应用场景：组件卸载时取消请求等

使用案例请参考 [useSafeState](/components/usesafestate)

## 实现源码
```ts | pure
import { useRef, useEffect } from 'react'

function useUnmountedRef() { 
    const ref = useRef(false);
    useEffect(() => {
        ref.current = false;
        return () => { ref.current = true };
    }, []);
    return ref;
}
export default useUnmountedRef;
```

### API

```js
const unmountRef = useUnmountedRef();
```

### return
|    参数    |       说明       |   类型    |
| :--------: | :--------------: | :-------: |
| unmountRef | 组件是否已经卸载 | `boolean` |
