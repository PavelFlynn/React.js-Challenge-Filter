import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    server: {
        proxy: {
            '/api': {
                target: 'https://coderbyte.com/api/challenges/json/age-counting',
                changeOrigin: true,
                secure: false,
                ws: true,
                rewrite: (path) => (path.replace(/.*/, '')),
            }
        }
    }
})
