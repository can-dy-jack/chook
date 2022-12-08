---
title: useUnmount
order: 2
toc: content
nav:  Chook
group: LifeCycle
---

# useUnmount
在 `DOM` 卸载之前执行给定的函数。类似于 class 组件中的 `componentWillUnmount` 生命周期钩子。

因为 `useEffect` Hook 可以看做 `componentDidMount` `componentDidUpdate` 和 `componentWillUnmount` 这三个函数的组合，所以可以使用 `useEffect` Hook 来实现；

## 示例
```jsx
import React, { useState } from "react";
import { useBoolean, useUnmount } from "@kartjim/chook";
import "../btn.css";

function MyComponents({func}) {
  useUnmount(() => {
    func();
  });
  return <div>🪶🪶🪶🪶🪶🪶🪶🪶🪶</div>
}

export default () => {
  const [info, setInfo] = useState("---");
  const [mount, { setFalse }] = useBoolean(true);

  return (
    <section style={{textAlign: "center"}}>
      <div>{info}</div>
      <button className="btn" onClick={setFalse}>
        unmount
      </button>
      { mount && <MyComponents func={() => setInfo("MyComponent allready remove!")}/>}
    </section>
  );
};
```

## 源码
```tsx | pure
import { useEffect } from "react";

function useUnmount(func: Function): void {
    useEffect(() => {
        return () => func();
    }, []);
}

export default useUnmount;
```

## API
```js | pure
useUnmount(func)
```
