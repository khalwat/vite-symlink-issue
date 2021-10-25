import path from 'path';

// https://vitejs.dev/config/
export default ({ command }) => ({
    base: command === 'serve' ? '' : '/dist/',
    build: {
        emptyOutDir: true,
        manifest: true,
        rollupOptions: {
            input: {
                app: './src/main.js',
            },
            output: {
                sourcemap: true
            },
        }
    },
    plugins: [
    ],
    publicDir: '../src/public',
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src')
        },
    },
    server: {
        origin: 'http://localhost:3000/src/',
        host: '0.0.0.0',
    }
});
