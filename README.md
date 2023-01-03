# chook

> reack hook library

[![NPM version](https://img.shields.io/npm/v/@kartjim/chook.svg?style=flat)](https://npmjs.org/package/@kartjim/chook)
[![NPM downloads](http://img.shields.io/npm/dm/@kartjim/chook.svg?style=flat)](https://npmjs.org/package/@kartjim/chook)

```bash
npm i @kartjim/chook
```
or 
```bash
yarn add @kartjim/chook
```
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
- 🔔 effect
  - [`useUpdate`](https://kartjim.cn/chook/components/useupdate) 实现组件的强制更新。
  - [`useTimeout`](https://kartjim.cn/chook/components/usetimeout) 在函数组件里可使用 `setTimeout` 一样使用 `useTimeout` 。
  - [`useInterval`](https://kartjim.cn/chook/components/useinterval) 在函数组件里可使用 `setInterval` 一样使用 `useInterval` 。
- 🔯 lifecycle
  - [`useMount`](https://kartjim.cn/chook/components/usemount) 实现类似于 `class` 组件中的 `componentDidMount` 生命周期钩子
  - [`useUnmount`](https://kartjim.cn/chook/components/useunmount) 实现类似于 `class` 组件中的 `componentWillUnmount` 生命周期钩子。
  - [`useUnmountedRef`](https://kartjim.cn/chook/components/useunmountedref) 获取当前组件是否已经卸载的 Hook。
- 🪢 dom
  - [`useTitle`](https://kartjim.cn/chook/components/usetitle) 自定义页面title
  - [`useActive`](https://kartjim.cn/chook/components/useactive) 监控点击事件
  - [`useClickOutside`](https://kartjim.cn/chook/components/useclickoutside) 监听目标元素外的点击事件
  - [`useFocus`](https://kartjim.cn/chook/components/usefocus) 监控是否拥有焦点
  - [`useHover`](https://kartjim.cn/chook/components/usehover) 监控鼠标是否移入
  - [`useMousePosition`](https://kartjim.cn/chook/components/usemouseposition) 获取鼠标的 `offsetX` 和 `offsetY` 值
- 🦴 optimize
  - [`useClosure`](https://kartjim.cn/chook/components/useclosure) 替代 `useCallback` ，避免闭包陷阱。

## LICENSE
MIT

<!-- pnpm dp -->
<!-- npm publish --access=public -->
