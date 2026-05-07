import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/kawmini-abeyrathna/",
  plugins: [react()],

  assetsInclude: ["**/*.PNG"],
  resolve: {
    extensions: [".tsx", ".ts", ".jsx", ".js"],
  },
});
