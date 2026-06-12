import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import fs from "fs";

function copyLogos() {
  try {
    const javaSrc = "C:/Users/trinh/.gemini/antigravity-ide/brain/aff4fbce-86e5-4ab3-b12b-496df5dd6545/java_logo_1781166286950.png";
    const nextSrc = "C:/Users/trinh/.gemini/antigravity-ide/brain/aff4fbce-86e5-4ab3-b12b-496df5dd6545/nextjs_logo_1781166298460.png";

    const javaDest = "./public/images/logos/java.png";
    const nextDest = "./public/images/logos/next.png";

    if (fs.existsSync(javaSrc)) {
      fs.copyFileSync(javaSrc, javaDest);
    }
    if (fs.existsSync(nextSrc)) {
      fs.copyFileSync(nextSrc, nextDest);
    }
  } catch (err) {
    // Silent fallback
  }
}

// Run immediately
copyLogos();

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    {
      name: 'copy-logos',
      configureServer(server) {
        copyLogos();
      },
      transform(code, id) {
        copyLogos();
        return null;
      }
    }
  ],
});
