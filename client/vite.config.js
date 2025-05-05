import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig(({ mode }) => {
  // Load env file variables
  const env = loadEnv(mode, process.cwd());

  return {
    plugins: [react()],
    define: {
        // inject env variable into code
        "import.meta.env.VITE_SERVER_URL": JSON.stringify(env.VITE_SERVER_URL),
      },
    };
});