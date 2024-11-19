import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',  // این تنظیم به Vite اجازه می‌دهد تا از هر آدرس شبکه‌ای قابل دسترسی باشد
    port: 5173,  // پورت 5173 به طور پیش‌فرض است (می‌توانید هر پورت دیگری انتخاب کنید)
  }
})
