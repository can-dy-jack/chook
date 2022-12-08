---
title: useMount
order: 2
toc: content

nav:
  title: Chook
group:
  title: state
---
# useBoolean
更好管理 `Boolean` 的 `Hook`

## 在线演示
```jsx
/**
 * title: 有四种方法
 * description: 其中`set` 设置为给定的值, `toggle`设置为相反值, `setTrue`设置为真, `setFalse`设置为假
 */
import React from 'react';
import { useBoolean } from "@kartjim/chook";

export default () => {
    const [state, { set, toggle, setTrue, setFalse }] = useBoolean(false);
    return (
        <section>
            <div style={{
                textAlign: "center",
                fontSize: "1.6rem",
                margin: "10px",
            }}>{ state ? "true" : "false" }</div>
            <div style={{ textAlign: "center" }}>
                <button className="btn" onClick={ () => {
                    set(true)
                }}>set(true)</button>
                <button className="btn" onClick={ () => {
                    set(false)
                }}>set(false)</button>
                <button className="btn" onClick={ () => {
                    toggle()
                }}>toggle</button>
                <button className="btn" onClick={ () => {
                    setTrue()
                }}>setTrue</button>
                <button className="btn" onClick={ () => {
                    setFalse()
                }}>setFalse</button>
            </div>
        </section>
    )
}
```

## 实现源码

```jsx | pure
import { useCallback, useState } from "react";

function useBoolean(initialValue: boolean = true): [boolean, {
    set: Function,
    toggle: Function,
    setTrue: Function,
    setFalse: Function
}] {
    const [state, set] = useState(initialValue);
    return [state, {
        set,
        toggle: useCallback(() => set(i => !i), []),
        setTrue: useCallback(() => set(true), []),
        setFalse: useCallback(() => set(false), [])
    }]
}

export default useBoolean;
```

## API
```js
const [state, { set, toggle, setTrue, setFalse }] = useBoolean(initialValue);
```
### Params
|参数|说明|类型|默认值|
|:---:|:---:|:---:|:---:|
|initialValue|可选项，传入默认的状态值|Boolean|true|
