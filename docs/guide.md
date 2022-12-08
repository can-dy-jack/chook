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

## issue
如果你发现代码有错误或漏洞等，可以在 [GitHub](https://github.com/can-dy-jack/chook) 上提交 `pr` ！

