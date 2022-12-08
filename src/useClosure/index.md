---
title: useClosure
order: 1
toc: content
nav: Chook
group:
  title: optimize
  order: 5
---
# useClosure
> 参考：[React官方团队出手，补齐原生Hook短板](https://zhuanlan.zhihu.com/p/509972998)

替代 `useCallback`，避免**闭包陷阱**。

## 使用实例

考虑如下例子：

```jsx
import React, { useState, useCallback } from 'react'
import "../btn.css"

export default () => {
  const [text, setText] = useState(0);

  const onClick = useCallback(() => {
    setText(text+1);
  }, []);

  return (
    <div>
        <div>{ text }</div>
        <div>
            <button onClick={onClick} className="btn">
                add
            </button>
        </div>
    </div>
  );
}
```
使用 `useCallback` 缓存函数，形成一个闭包，导致点击调用函数永远是 `0+1=1` 。

一种解决方式是 _为 `useCallback` 增加依赖项_  。但是这么做了后，每当依赖项变化，`useCallback` 会返回一个全新的 onClick 引用，这就失去了 `useCallback` 缓存函数引用 的作用。

最好的解决方式是创建一个自定义 Hook 。  
它有2个特性：
- 在组件多次 `render` 时保持引用一致
- 函数内始终能获取到最新的 `props` 与 `state` 

实现 `useClosure` ，使用效果如下：

```jsx
import React, { useState, useCallback } from 'react'
import {useClosure} from "@kartjim/chook"

export default () => {
  const [text, setText] = useState(0);

  const onClick = useClosure(() => {
    setText(text+1);
  });

  return (
    <div>
        <div>{ text }</div>
        <div>
            <button onClick={onClick} className="btn">
                add
            </button>
        </div>
    </div>
  );
}
```

## 实现源码
```ts
import { useRef, useLayoutEffect, useCallback } from "react";

function useClosure(handler: Function): Function {
    const handlerRef = useRef(handler);

    useLayoutEffect(() => {
      handlerRef.current = handler;
    });

    return useCallback((...args: any[]) => handlerRef.current(...args), []);
}

export default useClosure;
```

## API
```js
const func = useClosure(func);
```

### params

| 参数 | 类型       |
| ---- | ---------- |
| func | `Function` |

### returns

| 参数 | 说明             | 类型       |
| ---- | ---------------- | ---------- |
| func | 需要持久化的函数 | `Function` |
