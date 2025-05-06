import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vitejs.dev/config/
export default defineConfig({
  theme: {
    extend: {
      keyframes: {
        'subtle-bounce': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-0.5rem)' },
        },
      },
      animation: {
        'subtle-bounce': 'subtle-bounce 2s infinite ease-in-out',
      },
    },
  },
  plugins: [react(),
    tailwindcss(),
  ],
})
