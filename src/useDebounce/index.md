---
title: useDebounce
order: 5
toc: content
nav: Chook
group: state
---

# useDebounce
用于防抖的 Hook 函数

## 示例

```jsx
/**
 * title: 不使用防抖
 * description: 点击移动，1秒后回来。多次点击，会发现抖动！
 */
import React, { useRef } from 'react';
import "../btn.css";

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
                <button className="btn" onClick={move}>
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
 * description: 防止抖动！
 */
import React, { useRef } from 'react';
import { useDebounce } from "chook";

export default () => { 
    const circle = useRef();
    const deb = useDebounce(() => {
        circle.current.style.transform = "translateX(0)";
    }, 1000)

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
                <button className="btn" onClick={move}>
                    move!
                </button>
            </div>
        </section>
    )
}
```

## 实现源码
```ts
import { useRef } from "react";

function useDebounce(func: Function, delay: number = 1000): Function {
    let id = useRef(0);
    return function innerDeounce(...args: any[]) {
        if(id.current || id.current === 0) {
            clearTimeout(id.current);
        }
        id.current = setTimeout(() => {
            func(...args);
        }, delay);
    }
}

export default useDebounce;
```

### API

```js
const deb = useDebounce(func, delay);
// use: deb(...args)
```
