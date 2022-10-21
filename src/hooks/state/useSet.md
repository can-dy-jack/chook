---
title: useSet
order: 7
---
# useSet
用于操作 `Set` 数据类型的 Hook

## 使用案例
```jsx
import React from 'react'
import useSet from './useSet.js'
import "../buttonic-tiny.css"

export default () => {
    const [nums, { add, remove, reset }] = useSet(['useSet'])
    return (
        <div>
            <div>
                <pre>{ JSON.stringify([...nums], null, 4) }</pre>
            </div>
            <div>
                <button className="btnic-push" onClick={() => {
                    add(Date.now() + '')
                }}>
                    add
                </button>
                <button className={ nums.has('useSet') ? "btnic-push" : "btnic-push disabled"} onClick={() => {
                    remove('useSet')
                }}>
                    delete 'useSet'
                </button>
                <button className="btnic-push" onClick={reset}>reset</button>
            </div>
        </div>
    )
}
```

## 实现源码
```js
import { useCallback, useState } from "react";

export default function useSet(initalData) {
    const [set, setSet] = useState(
        new Set(initalData ? initalData : [])
    )

    const add = useCallback((any) => {
        if(set.has(any)) return;
        setSet(pre => {
            const newSet = new Set(pre);
            newSet.add(any);
            return newSet;
        })
    }),
        remove = useCallback((key) => {
            if(!set.has(key)) return;
            setSet(pre => {
                const newSet = new Set(pre);
                newSet.delete(key);
                return newSet;
            })
        }),
        reset = useCallback(() => setSet(new Set(initalData ? initalData : [])));
    return [set, { add, remove, reset }];
}
```

## API
```js
const [set, { add, remove, reset }] = useSet(initialValue)
```

### params

| 参数 | 说明 | 类型 |
| ---- | ---- | ---- ||
| initialValue | 可选项，传入默认的 `Set` 参数。默认为 `[]` | iterable，可迭代对象。如一个数组 |

### returns

| 参数   | 说明         | 类型               |
| ------ | ------------ | ------------------ |
| set    | Set 对象     | `Set`                |
| add    | 添加元素     | `Function` |
| remove | 移除元素     | `Function` |
| reset  | 重置为默认值 | `Function`         |

