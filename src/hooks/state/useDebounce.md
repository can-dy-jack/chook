---
title: useDebounce
order: 4
---
# useDebounce
用于防抖的 Hook 函数

## 示例

```jsx
/**
 * title: 不使用防抖
 * desc: 点击移动，1秒后回来。多次点击，会发现抖动！
 */
import React, { useRef } from 'react';
import "../buttonic-tiny.css";

export default () => { 
    const circle = useRef();

    function move() {
        circle.current.style.transform = "translateX(200px)";
        setTimeout(() => {
            circle.current.style.transform = "translateX(0)";
        }, 1000)
    }

    return (
        <section>
            <div>
                <div ref={circle} style={{
                    height: "100px",
                    width: "100px",
                    borderRadius: "50%",
                    background: "radial-gradient(circle at 30px 30px, #cc00cc, #000)",
                    transition: "all 0.6s linear"
                }}></div>
            </div>
            <div>
                <button className="btnic-push" onClick={move}>
                    move!
                </button>
            </div>
        </section>
    )
}
```

```jsx
/**
 * title: 使用防抖
 * desc: 防止抖动！
 */
import React, { useRef } from 'react';
import useDebounce from "./useDebounce";
import "../buttonic-tiny.css";

export default () => { 
    const circle = useRef();
    const deb = useDebounce(() => {
        circle.current.style.transform = "translateX(0)";
    }, { delay: 1000 })

    function move() {
        circle.current.style.transform = "translateX(200px)";
        deb();
    }

    return (
        <section>
            <div>
                <div ref={circle} style={{
                    height: "100px",
                    width: "100px",
                    borderRadius: "50%",
                    background: "radial-gradient(circle at 30px 30px, #cc00cc, #000)",
                    transition: "all 0.6s linear"
                }}></div>
            </div>
            <div>
                <button className="btnic-push" onClick={move}>
                    move!
                </button>
            </div>
        </section>
    )
}
```

## 实现源码
```jsx | pure
import { useRef } from "react";

function useDebounce(func, options = {
    delay: 1000,
}) {
    let id = useRef();
    return function innerDeounce(...args) {
        clearTimeout(id.current);
        id.current = setTimeout(() => {
            func(...args);
        }, options.delay);
    }
}

export default useDebounce;
```

### API

```js
const deb = useDebounce(func, { delay });
// use: deb(...args)
```
