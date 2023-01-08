---
title: 指南
---

## 使用
### npm

npm 上已有名为 `chook` 的包（😢）,只能改个名字（`@kartjim/chook`）上传到npm。

```bash
npm i @kartjim/chook
```

然后导入：
```ts
// 别忘了大括号！！！
import { useSetState } from '@kartjim/chook';
// useSetState()

// or 
import * as chook from "@kartjim/chook";
// chook.useSetState()
```

### 直接copy！
每个自定义 hook 我都会将源码贴出，以便可以直接使用在您的项目而不用下载整个库。

## 📃 Documentation
- ✍️ state
  - [`useSetState`](/components/usesetstate) 管理 `object` 类型 `state` 的 `Hooks`
  - [`useBoolean`](/components/useboolean) 更好管理 `Boolean` 的 `Hook`
  - [`usePrevious`](/components/useprevious) 保存上一次渲染时 `state` 的值。
  - [`useSafeState`](/components/usesafestate) 用法与 `React.useState` 完全一样，避免因组件卸载后更新状态而导致的内存泄漏。
  - [`useDebounce`](/components/usedebounce) 用于防抖的 `Hook` 函数
  - [`useThrottle`](/components/usethrottle) 用于节流的 `Hook` 函数 
  - [`useSet`](/components/useset) 用于操作 `Set` 数据类型的 `Hook`
  - [`useMap`](/components/usemap) 用于操作 `Map` 数据类型的 `Hook`
  - [`useClippy`](/components/useclippy) 用于读取和写入用户的剪贴板的 `Hook`
- 🔔 effect
  - [`useUpdate`](/components/useupdate) 实现组件的强制更新。
  - [`useTimeout`](/components/usetimeout) 在函数组件里可使用 `setTimeout` 一样使用 `useTimeout` 。
  - [`useInterval`](/components/useinterval) 在函数组件里可使用 `setInterval` 一样使用 `useInterval` 。
- 🔯 lifecycle
  - [`useMount`](/components/usemount) 实现类似于 `class` 组件中的 `componentDidMount` 生命周期钩子
  - [`useUnmount`](/components/useunmount) 实现类似于 `class` 组件中的 `componentWillUnmount` 生命周期钩子。
  - [`useUnmountedRef`](/components/useunmountedref) 获取当前组件是否已经卸载的 Hook。
- 🪢 dom
  - [`useTitle`](/components/usetitle) 自定义页面title
  - [`useFavicon`](/components/usefavicon) 设置页面 `favicon` 的 `Hook`
  - [`useActive`](/components/useactive) 监控点击事件
  - [`useClickOutside`](/components/useclickoutside) 监听目标元素外的点击事件
  - [`useFocus`](/components/usefocus) 监控是否拥有焦点
  - [`useHover`](/components/usehover) 监控鼠标是否移入
  - [`useMousePosition`](/components/usemouseposition) 获取鼠标的 `offsetX` 和 `offsetY` 值
- 🦴 optimize
  - [`useClosure`](/components/useclosure) 替代 `useCallback` ，避免闭包陷阱。

## issue
如果你发现代码有错误或漏洞等，可以在 [GitHub](https://github.com/can-dy-jack/chook) 上提交 `pr` ！

