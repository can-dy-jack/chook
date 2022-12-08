---
title: useTimeout
order: 2
toc: content
nav: Chook
group: effect
---

# useTimeout

在 `react` 函数组件中，使用 `setTimeout` 需要在 `dom` 卸载时，手动 将定时器移除，否则**可能造成内存泄漏**。

`useTimeout` `hook` 帮助你清除定时器，无需手动操作。可像使用 `setTimeout` 一样使用 `useTimeout`。

> React函数组件与 `setTimeout` 或 `setInterval` 并不能很好的结合使用。如果您想知道相关解析和解决方案分析，可以阅读这篇文章：[Making setInterval Declarative with React Hooks](https://overreacted.io/zh-hans/making-setinterval-declarative-with-react-hooks/)

## 在线演示

```jsx
/**
 * title: 基本用法
 * description: 三秒后加一
 */
import React, { useState } from 'react';
import {useTimeout} from "chook";

export default () => {
  const [count, setCount] = useState(0);
  useTimeout(() => {
    setCount(count+1)
  }, 3000);
  return <div style={{fontSize:"1.6rem"}}>{ count }</div>
}
```

```jsx
/**
 * title: 进阶
 * description: 动态修改 delay 以实现定时器间隔变化与暂停。
 */
import React, { useState } from 'react';
import {useTimeout} from "chook";
import "../btn.css";

export default () => {
  const [count, setCount] = useState(0);
  const [delay, setDelay] = useState(1000);
  const add = useTimeout(() => {
    setCount(count+1)
  }, delay)
  return (
    <section>
      <div style={{fontSize:"1.2rem"}}>count: { count }</div>
      <div style={{fontSize:"1.2rem"}}>delay: { delay }</div>
      <div>
        <button className="btn" onClick={() => {
          setDelay(delay + 500)
        }}>add delay</button>
        <button className="btn" onClick={() => {
          setDelay(delay > 1000 ? delay - 500 : delay)
        }}>reduce delay</button>
        <button className="btn" onClick={() => {
          setDelay(1000);
          setCount(1);
        }}>reset</button>
      </div>
    </section>
  )
}
```

## 实现源码
```ts
import { useEffect, useRef } from "react";

function useTimeout(func: Function, delay: number): void {
    const saveCallback = useRef(func);
    useEffect(() => {
        saveCallback.current = func;
    }, [func])

    useEffect(() => {
        const cb = () => saveCallback.current();
        if(delay != null) {
            const id = setTimeout(cb, delay);
            return () => clearTimeout(id);
        } 
    }, [delay]);
}

export default useTimeout;
```

## API
```js
useTimeout(func, delay);
```

### params
|参数|说明|类型|
|:---:|---|:---:|
|func|要执行函数|`Function`|
|delay|定时时间；支持动态变化；设置为 `null` 时，可以暂停计时器| `number` |
