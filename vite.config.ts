import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";
import tailwindcss from "@tailwindcss/vite";
import svgr from "vite-plugin-svgr";

export default defineConfig({
  plugins: [react(), tsconfigPaths(), tailwindcss(), svgr()],
  // server: {
  //   proxy: {
  //     "/oauth": {
  //       target: "https://kauth.kakao.com",
  //       changeOrigin: true,
  //       secure: false,
  //       rewrite: (path) => path.replace(/^\/oauth/, "/oauth"),
  //     },
  //   },
  // },
});
