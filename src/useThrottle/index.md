---
title: useThrottle
order: 6
toc: content
nav: Chook
group: state
---
# useThrottle
用于节流的 Hook 函数

## 在线演示

```jsx
/**
 * title: 不使用节流
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
                    background: "radial-gradient(circle at 30px 30px, #cccc00, #000)",
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
 * title: 使用节流
 * description: 一段时间内只触发一次
 */
import React, { useRef } from 'react';
import { useThrottle } from "chook";

export default () => { 
    const circle2 = useRef();
    function move() {
        circle2.current.style.transform = "translateX(200px)";
        throttle();
    }
    const throttle = useThrottle(() => {
        circle2.current.style.transform = "translateX(0)";
    }, 1000)

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
                <button className="btn" onClick={ move }>
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

function useThrottle (func: Function, delay: number = 1000): Function {
    const id = useRef(0);
    return function innerThrottle(...args: any[]): void {
        if(id.current == 0) {
            return;
        } else {
            id.current = setTimeout(() => {
                func(...args);
                id.current = 0;
            }, delay);
        }
    }
}

export default useThrottle;
```

### API

```js
const throttle = useThrottle(func, delay)
// use: throttle(...args);
```
