---
title: useThrottle
order: 5
---
# useThrottle
用于节流的 Hook 函数

## 在线演示

```jsx
/**
 * title: 不使用节流
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
                    background: "radial-gradient(circle at 30px 30px, #cccc00, #000)",
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
 * title: 使用节流
 * desc: 一段时间内只触发一次
 */
import React, { useRef } from 'react';
import useThrottle from "./useThrottle";
import "../buttonic-tiny.css";

export default () => { 
    const circle2 = useRef();
    const throttle = useThrottle(() => {
        circle2.current.style.transform = "translateX(0)";
    }, { delay: 1000 })

    function move() {
        circle2.current.style.transform = "translateX(200px)";
        throttle();
    }

    return (
        <section>
            <div>
                <div ref={circle2} style={{
                    height: "100px",
                    width: "100px",
                    borderRadius: "50%",
                    background: "radial-gradient(circle at 30px 30px, #cccc00, #000)",
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

function useThrottle (func, options = { delay: 1000 }) {
    let id = useRef(null);
    return function innerThrottle(...args) {
        if(id.current) {
            return;
        } else {
            id.current = setTimeout(() => {
                func(...args);
                id.current = null;
            }, options.delay);
        }
    }
}

export default useThrottle;
```

### API

```js
const throttle = useThrottle(func, { delay })
// use: throttle(...args);
```
