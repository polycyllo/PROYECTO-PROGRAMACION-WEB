import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true, // Permite que el servidor esté disponible en la red local
    port: 5173, // Asegúrate de que el puerto coincida con el de tu aplicación
    hmr: {
      protocol: 'ws', // Asegura que se utilice WebSocket para HMR
      host: 'localhost',
    },
  },
});
