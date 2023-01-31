---
title: useLatest
order: 11
toc: content
nav: Chook
group: state
---
# useLatest
`useRef` 可以拿到最新值，可以对其进行封装，保证每次拿到最新的值，避免你闭包问题。

## API
```ts
useLatest<T>(value: T)
```

## 实现源码

```ts
import { useRef } from "react";

function useLatest<T>(value: T) {
  const ref = useRef(value);
  ref.current = value;
  return ref;
}

export default useLatest;
```
