import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
        "/query": "http://localhost:5173", // 代理 /query 路由到后端服务器
    },
},
});
