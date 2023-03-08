/// <reference types="vite/client" />

// 文件作用：帮助编译器识别类型

// Vite 默认的类型定义是写给它的 Node.js API 的。
// 要将其补充到一个 Vite 应用的客户端代码环境中，需添加一个​​d.ts​​​声明文件，如当前文件

// 三斜杠指令是包含单个​​XML​​标签的单行注释，注释的内容会做为编译器指令使用，只有在文件的最顶部才会生效，
// 可以查看TypeScript: Documentation - Triple-Slash Directives学习相关内容。

declare module "*.vue" {
  import type { DefineComponent } from "vue";
  const component: DefineComponent<{}, {}, any>;
  export default component;
}
