---
title: useClippy
order: 9
toc: content
nav: Chook
group: state
---
# useClippy

> 用于读取和写入用户的剪贴板

:::warning
需要获取剪切板读取权限。

*该 `Hook` 会自动向用户请求剪切板读取权限*

本 `Hook` 采用较新的 API `Clipboard` 可能会有兼容性的问题，更具兼容性的方法可参考：[CharlesStover/use-clippy](https://github.com/CharlesStover/use-clippy)
:::


```tsx
import React, { useState } from 'react';
import { useClippy } from '@kartjim/chook';
import "../btn.css";
import "../input.css";

export default function MyComponent() {
  const [input, setInput] = useState("");
  const [clipboard, paste, copy] = useClippy();

  return (
    <div>
      <div>
        <input className="input" placeholder="复制内容" 
          value={input} onChange={e => { setInput(e.target.value) }} 
        />
        <button
          onClick={(e) => { 
            copy(input) 
          }}
          className="btn"
        >
          Copy
        </button>
      </div>

      <button
        onClick={() => { paste() }}
        className="btn"
      >
        Read my clipboard
      </button>

      <p>剪切板内容：<u>{ clipboard }</u></p>
    </div>
  );
}
```
## API
```ts
const [clipboard, paste, copy] = useClippy(): [
  string, 
  () => void, 
  (text: string) => void
]
```

## 实现源码
```ts
import { useState, useCallback } from 'react';

function useClippy(): [string, () => void, (text: string) => void] {
  const [clipboard, setClipboard] = useState('');

  const paste = useCallback((): void => {
    navigator.clipboard.readText().then(clipText => {
      setClipboard(clipText)
    })
  }, [])

  const copy = useCallback((text: string): void => {
    navigator.clipboard.writeText(text)
  }, [])

  return [clipboard, paste, copy];
}
export default useClippy;
```
