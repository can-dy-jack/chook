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
  - [`useSetState`](https://kartjim.cn/chook/components/usesetstate) 管理 `object` 类型 `state` 的 `Hooks`
  - [`useBoolean`](https://kartjim.cn/chook/components/useboolean) 更好管理 `Boolean` 的 `Hook`
  - [`usePrevious`](https://kartjim.cn/chook/components/useprevious) 保存上一次渲染时 `state` 的值。
  - [`useSafeState`](https://kartjim.cn/chook/components/usesafestate) 用法与 `React.useState` 完全一样，避免因组件卸载后更新状态而导致的内存泄漏。
  - [`useDebounce`](https://kartjim.cn/chook/components/usedebounce) 用于防抖的 `Hook` 函数
  - [`useThrottle`](https://kartjim.cn/chook/components/usethrottle) 用于节流的 `Hook` 函数 
  - [`useSet`](https://kartjim.cn/chook/components/useset) 用于操作 `Set` 数据类型的 `Hook`
  - [`useMap`](https://kartjim.cn/chook/components/usemap) 用于操作 `Map` 数据类型的 `Hook`
  - [`useClippy`](https://kartjim.cn/chook/components/useclippy) 用于读取和写入用户的剪贴板的 `Hook`
  - [`useFirstMountState`](https://kartjim.cn/chook/components/usefirstmountstate) 判断组件是否是首次渲染的 `Hook`
  - [`useLatest`](https://kartjim.cn/chook/components/uselatest) 对 `useRef` 进行封装，保证每次拿到最新的值，避免你闭包问题。
- 🔔 effect
  - [`useUpdate`](https://kartjim.cn/chook/components/useupdate) 实现组件的强制更新。
  - [`useTimeout`](https://kartjim.cn/chook/components/usetimeout) 在函数组件里可使用 `setTimeout` 一样使用 `useTimeout` 。
  - [`useInterval`](https://kartjim.cn/chook/components/useinterval) 在函数组件里可使用 `setInterval` 一样使用 `useInterval` 。
  - [`useUpdateEffect`](https://kartjim.cn/chook/components/useupdateeffect) 更新后立即调用，但是首次渲染不会执行此方法。
- 🔯 lifecycle
  - [`useMount`](https://kartjim.cn/chook/components/usemount) 实现类似于 `class` 组件中的 `componentDidMount` 生命周期钩子
  - [`useUnmount`](https://kartjim.cn/chook/components/useunmount) 实现类似于 `class` 组件中的 `componentWillUnmount` 生命周期钩子。
  - [`useUnmountedRef`](https://kartjim.cn/chook/components/useunmountedref) 获取当前组件是否已经卸载的 Hook。
- 🪢 dom
  - [`useTitle`](https://kartjim.cn/chook/components/usetitle) 自定义页面title
  - [`useFavicon`](https://kartjim.cn/chook/components/usefavicon) 设置页面 `favicon` 的 `Hook`
  - [`useActive`](https://kartjim.cn/chook/components/useactive) 监控点击事件
  - [`useClickOutside`](https://kartjim.cn/chook/components/useclickoutside) 监听目标元素外的点击事件
  - [`useFocus`](https://kartjim.cn/chook/components/usefocus) 监控是否拥有焦点
  - [`useHover`](https://kartjim.cn/chook/components/usehover) 监控鼠标是否移入
  - [`useMousePosition`](https://kartjim.cn/chook/components/usemouseposition) 获取鼠标的 `offsetX` 和 `offsetY` 值
- 🦴 optimize
  - [`useClosure`](https://kartjim.cn/chook/components/useclosure) 替代 `useCallback` ，避免闭包陷阱。

:::warning
有时候，也许你并不需要太多的封装，原生 `API` 即可满足你的需求！
:::

## 📚 原生 Hooks

- `useState`
  - 返回一个 `state`，以及更新 `state` 的函数。
- `useEffect`
  - 该 `Hook` 接收一个包含命令式、且可能有副作用代码的函数。
- `useContext`
  - 提供一个在组件中共享值的方式，避免值在多个父子组件中传递。
  - 类似于 `redux` 的功能，所以如果您需要共享值但又不想要太复杂，可以选择此 `Hook`。
- `useReducer`
  - `useState` 的替代方案。它接收一个形如 `(state, action) => newState` 的 `reducer`，并返回当前的 `state` 以及与其配套的 `dispatch` 方法。
  - 工作方式类似于 `redux` 。
- `useCallback`
  - 返回一个 `memoized` 回调函数。
  - 主要用于性能优化
- `useMemo`
  - 返回一个 memoized 值。
  - 类似于 `useCallback` , 但 `useCallback` 是保存函数，而 `useMemo` 用于保存任何值。即 `useCallback(fn, deps)` 相当于 `useMemo(() => fn, deps)`。
  - **你可以把 `useMemo` 作为性能优化的手段，但不要把它当成语义上的保证。**
- `useRef`
  - `useRef` 返回一个可变的 `ref` 对象，其 `.current` 属性被初始化为传入的参数（`initialValue`）。返回的 `ref` 对象在组件的整个生命周期内持续存在。
  - 用于保证多次渲染时值的不变性和获取 `DOM` 元素。
- `useImperativeHandle`
  - `useImperativeHandle` 可以让你在使用 ref 时自定义暴露给父组件的实例值。
  - **即用在父组件需要调用子组件里的函数时。** 
  - _或许你可以使用状态提升解决此类问题而不是 `useImperativeHandle` 。_
  - `useImperativeHandle` 应当与 `forwardRef` 一起使用
- `useLayoutEffect`
  - 其函数签名与 `useEffect` 相同，但它会在所有的 `DOM` 变更之后同步调用 `effect`。可以使用它来读取 `DOM` 布局并同步触发重渲染。在浏览器执行绘制之前，`useLayoutEffect` 内部的更新计划将被同步刷新。
- `useDebugValue`
  - 可用于在 React开发者工具 中显示自定义 `hook` 的标签
- `useDeferredValue`
  - 接受一个值，并返回该值的新副本，该副本将推迟到更紧急地更新之后。
  - 该 `hook` 与使用防抖和节流去延迟更新的用户空间 `hooks` 类似。使用 `useDeferredValue` 的好处是，React 将在其他工作完成（而不是等待任意时间）后立即进行更新，并且像 `startTransition` 一样，延迟值可以暂停，而不会触发现有内容的意外降级。
- `useTransition`
  - 回一个状态值表示过渡任务的等待状态，以及一个启动该过渡任务的函数。
- `useId`
  - 用于生成横跨服务端和客户端的稳定的唯一 ID 的同时避免 hydration 不匹配的 hook。

## issue
如果你发现代码有错误或漏洞等，可以在 [GitHub](https://github.com/can-dy-jack/chook) 上提交 `pr` ！

