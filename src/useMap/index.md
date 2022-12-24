---
title: useMap
order: 8
toc: content
nav: Chook
group: state
---
# useMap
用于操作 `Map` 数据类型的 Hook

## 使用示例
```jsx
import React, { useState, useEffect } from 'react'
import { useMap } from '@kartjim/chook'
import "../btn.css"

export default () => {
  const [map, { set, get, cover, reset, remove }] = useMap([["author", "kartjim"], ["hello", "chook"]]);
  const [mapstr, setMapstr] = useState({});
  const [t, setT] = useState('');
  useEffect(() => {
    let obj = {};
    for(let [k, v] of map) {
      obj[k] = v;
    }
    setMapstr(obj);
  }, [map])

  return (
    <div>
      <pre>{ JSON.stringify(mapstr, null, 4) }</pre>
      <div>
        <button class="btn" onClick={() => {
          let now = new Date();
          set(now.toDateString(), '' + now.getTime())
        }}>set</button>
      </div>
      <div>
        <button class="btn" onClick={() => {
          let now = new Date();
          setT(get(now.toDateString()))
        }}>get</button>
        <span class="btn disabled">time: {t}</span>
      </div>
      <div>
        <button class="btn"onClick={() => {
          remove("hello")
        }}>remove</button>
      </div>
      <div>
        <button class="btn"onClick={() => {
          reset()
        }}>reset</button>
      </div>
      ------
      <div>
        <button class="btn"onClick={() => {
          cover([["/?", "!!"]])
        }}>cover</button>
      </div>
    </div>
  )
}
```

## API
```ts
const [map, { set, get, cover, reset, remove }] = useMap(initialValue?: Iterable<[any, any]>);
```

### Params
| 参数         | 说明                            | 类型                                                           |
| ------------ | ------------------------------- | -------------------------------------------------------------- |
| initialValue | 可选项，传入默认的 `Map` 参数。 | Iterable<[any, any]>；一个元素是键值对的数组或其它可迭代对象。 |

### returns
| 参数   | 说明                  | 类型                                     |
| :------: | --------------------- | ---------------------------------------- |
| map    | Map 对象              | `Map`                                    |
| set    | 向map里添加键值对     | `(k: any, v: any) => void`               |
| get    | 获取map里键对应的值   | `(k: any) => MapItem`                    |
| cover  | 生成一个新的 Map 对象 | `(newMap: Iterable<[any, any]>) => void` |
| remove | 移除元素              | `(key: any) => void`                     |
| reset  | 重置为默认值          | `() => void`                             |

## 实现源码
```ts
import { useState } from "react";
import useClosure from "../useClosure";

function useMap<K, V>(initalVal?: Iterable<readonly [K, V]>) {
  const [map, setMap] = useState(new Map(initalVal));

  const set = (k: K, v: V) => {
    setMap((pre) => {
      let newMap = new Map(pre);
      newMap.set(k, v);
      return newMap;
    })
  }
  const reset = () => {
    setMap(new Map(initalVal))
  }
  const cover = (newMap: Iterable<readonly [K, V]>) => {
    setMap(new Map(newMap))
  }
  const remove = (k: K) => {
    setMap((pre) => {
      let newMap = new Map(pre)
      newMap.delete(k);
      return newMap;
    })
  }
  const get = (k: K) => map.get(k);

  return [map, {
    set: useClosure(set),
    reset: useClosure(reset),
    cover: useClosure(cover),
    remove: useClosure(remove),
    get: useClosure(get)
  }]
}

export default useMap;
```
