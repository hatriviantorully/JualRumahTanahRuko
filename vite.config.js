import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Ganti username & repoName sesuai GitHub kamu
export default defineConfig({
  plugins: [react()],
  base: "/JualRumahTanahRuko/", // nama repo di GitHub
  publicDir: "public", // Pastikan ini ada
});
