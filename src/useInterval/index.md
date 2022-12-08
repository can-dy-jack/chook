---
title: useInterval
order: 3
toc: content
nav: Chook
group: effect
---
# useInterval
useInterval 封装 setInterval 功能

> React函数组件与 `setTimeout` 或 `setInterval` 并不能很好的结合使用。如果您想知道相关解析和解决方案分析，可以阅读这篇文章：[Making setInterval Declarative with React Hooks](https://overreacted.io/zh-hans/making-setinterval-declarative-with-react-hooks/)

## 在线演示

```jsx
/**
 * title: 基本用法
 * description: 每秒加一
 */
import React, { useState } from 'react';
import {useInterval} from "chook";

export default () => {
  const [count, setCount] = useState(0);
  useInterval(() => {
    setCount(count+1)
  }, 1000);
  return <div style={{fontSize:"1.6rem"}}>count：{ count }</div>
}
```


```jsx
/**
 * title: 进阶
 * description: 动态修改 `delay` 以实现定时器间隔变化与暂停。
 */
import React, { useState } from 'react';
import {useInterval} from "chook";
import "../btn.css";

export default () => {
  const [count, setCount] = useState(0);
  const [delay, setDelay] = useState(1000);
  const add = useInterval(() => {
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
import { useRef, useEffect } from "react"

function useInterval(func: Function, delay: number): void {
    const saveCallback = useRef(func);

    useEffect(() => {
        saveCallback.current = func;
    }, [func])

    useEffect(() => {
        const cb = () => saveCallback.current();
        if(delay !== null) {
            const id = setInterval(cb, delay);
            return () => clearInterval(id);
        }
    }, [delay]);
}

export default useInterval;
```

## API
```js
useInterval(func, delay);
```

### params
|参数|说明|类型|
|:---:|---|:---:|
|func|间隔函数|`Function`|
|delay|定时时间；支持动态变化；设置为 `null` 时，可以暂停计时器| `number` |
