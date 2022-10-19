import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
<<<<<<< HEAD
  base: '/pre-onboarding-4th-project/',
  plugins: [react()],
=======
  plugins: [react()],
  server: {
    port: 3000,
  },
>>>>>>> parent of 99ef0ad (Add: dist)
});
