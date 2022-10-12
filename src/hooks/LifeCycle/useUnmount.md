---
title: useUnmount
---
# useUnmount
在 `DOM` 卸载之前执行给定的函数。类似于 class 组件中的 `componentWillUnmount` 生命周期钩子。

因为 `useEffect` Hook 可以看做 `componentDidMount` `componentDidUpdate` 和 `componentWillUnmount` 这三个函数的组合，所以可以使用 `useEffect` Hook 来实现；

## 示例
```jsx
import React, { useState } from "react";
import useBoolean from "../state/useBoolean.js";
import useUnmount from "./useUnmount.js";
import "../buttonic-tiny.css";

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
      <button className="btnic-push" onClick={setFalse}>
        unmount
      </button>
      { mount && <MyComponents func={() => setInfo("MyComponent allready remove!")}/>}
    </section>
  );
};
```

## 源码
```jsx | pure
import { useEffect } from "react";

function useUnmount(func) {
    useEffect(() => {
        return () => func();
    })
}

export default useUnmount;
```

## API
```js
useUnmount(func)
```
