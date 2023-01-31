---
title: useUpdateEffect
order: 4
toc: content
nav: Chook
group: effect
---
# useUpdateEffect
在 Class 组件中存在 componentDidUpdate 声明周期。他会在更新后立即调用，但是首次渲染不会执行此方法。`useUpdateEffect` 用于模拟该行为。

:::info
使用方法类似于 `useEffect` 
:::

## API
```ts
useUpdateEffect(effect: EffectCallback, deps: [])
```

### params
|  参数  |      说明      |    类型    |
| :----: | :------------: | :--------: |
| effect | 副作用函数 | `Function` |
|  deps  |    依赖数组    |  `Array`   |

## 实现源码
```ts
import { EffectCallback,  useEffect } from 'react';
import useFirstMountState from '../useFirstMountState';

function useUpdateEffect (effect: EffectCallback, deps: []) {
  const isFirstMount = useFirstMountState();
  useEffect(() => {
    if (!isFirstMount) {
      return effect();
    }
  }, [...deps]);
}

export default useUpdateEffect;
```
