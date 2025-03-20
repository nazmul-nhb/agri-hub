import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
	plugins: [tailwindcss(), react()],
	server: { host: true },
	build: { chunkSizeWarningLimit: 3036 },
});
