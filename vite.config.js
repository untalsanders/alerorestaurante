import react from '@vitejs/plugin-react-swc'
import { fileURLToPath } from 'node:url'
import { defineConfig, loadEnv } from 'vite'

export default defineConfig(({ command, mode }) => {
    const env = loadEnv(mode, process.cwd(), '')
    return {
        base: (command === 'build') ? JSON.stringify(env.BASE_URL) : '/',
        define: {
            __BASE_URL__: JSON.stringify(env.BASE_URL),
        },
        plugins: [react()],
        resolve: {
            alias: [
                {
                    find: '@',
                    replacement: fileURLToPath(new URL('./src', import.meta.url)),
                },
                {
                    find: '@components',
                    replacement: fileURLToPath(new URL('./src/components', import.meta.url)),
                },
                {
                    find: '@pages',
                    replacement: fileURLToPath(new URL('./src/pages', import.meta.url)),
                },
                {
                    find: '@styles',
                    replacement: fileURLToPath(new URL('./src/styles', import.meta.url)),
                },
                {
                    find: '@assets',
                    replacement: fileURLToPath(new URL('./src/assets', import.meta.url)),
                },
            ],
        },
    }
})
