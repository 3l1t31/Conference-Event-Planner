import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
    base: "/Conference_Event_Planner",   
  plugins: [react()],
})
