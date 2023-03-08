import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";
import { resolve } from "path";

const pathResolve = (dir: string) => resolve(__dirname, dir);

// https://vitejs.dev/config/
export default defineConfig({
  base: "./", // 公共基础路径，指定为当前项目根目录
  plugins: [
    vue(),
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
  ],
  server: {
    host: "127.0.0.1",
    port: 1730, // 设置服务启动端口号，如果端口已经被使用，Vite 会自动尝试下一个可用的端口
    open: true, // boolean | string 设置服务启动时是否自动打开浏览器，当此值为字符串时，会被用作 URL 的路径名
    cors: true, // 为开发服务器配置 CORS，配置为允许跨域

    // 设置代理，根据我们项目实际情况配置，本地开发调试，依赖http-proxy模块
    proxy: {
      "/api": {
        target: "http://127.0.0.1:8080", // 后台服务地址
        changeOrigin: true, // 是否允许不同源
        secure: false, // 支持https
        // rewrite: (path) => path.replace(/^\/api/, ""),
      },
    },
  },
  // 通过 alias 别名，我们可以快速地指定首层的目录，并且相比相对路径减少了路径索引的消耗
  // 指定解析路径使用的 path module需要先安装 ​​@type/node​​
  resolve: {
    alias: {
      "@": pathResolve("./src"), // 设置 `@` 指向 `src` 目录
      views: pathResolve("./src/views"), // 设置 `views` 指向 `./src/views` 目录，下同
      components: pathResolve("./src/components"),
      assets: pathResolve("./src/assets"),
    },
  },
  build: {
    outDir: "dist", // 指定打包路径，默认为项目根目录下的 dist 目录
    terserOptions: {
      // terser 是一个用于 ES6+ 的 JavaScript 解析器和 mangler/compressor 工具包
      compress: {
        keep_infinity: true, // 防止 Infinity 被压缩成 1/0，这可能会导致 Chrome 上的性能问题
        drop_console: true, // 生产环境去除 console
        drop_debugger: true, // 生产环境去除 debugger
      },
    },
    chunkSizeWarningLimit: 1500, // chunk 大小警告的限制（以 kbs 为单位）
  },
});
