---
title: useMount
---
# useMount
在 `DOM` 渲染后执行给定的函数。类似于 class 组件中的 `componentDidMount` 生命周期钩子。

因为 `useEffect` Hook 可以看做 `componentDidMount` `componentDidUpdate` 和 `componentWillUnmount` 这三个函数的组合，所以可以使用 `useEffect` Hook 来实现；

## 示例
```jsx
import React, { useState } from "react";
import useMount from "./useMount.js";
import useBoolean from "../state/useBoolean.js";
import "../buttonic-tiny.css";

const MyComponent = () => {
  const [state, setState] = useState("");
  useMount(() => {
    setState("MyComponent allready mount!");
  });

  return <div>{ state }</div>;
};

export default () => {
  const [state, { toggle }] = useBoolean(false);

  return (
    <section style={{textAlign: "center"}}>
      {state ? <MyComponent /> : <div>MyComponent remove</div>}
      <button className="btnic-push" onClick={toggle}>
        {state ? 'unmount' : 'mount'}
      </button>
    </section>
  );
};
```

## 源码
```jsx | pure
import { useEffect } from "react";

function useMount(func) {
    useEffect(() => {
        func();
    });
}

export default useMount;
```

## API
```js
useMount(func);
```
