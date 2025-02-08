import "dotenv/config";
import adapter from "@sveltejs/adapter-vercel";
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
    extensions: [".svelte", ".md"],
    preprocess: [
        vitePreprocess()
    ],

    kit: {
        adapter: adapter({
            runtime: 'edge'
        }),
        alias: {
            $lib: './src/lib',
            $components: './src/components'
        }
    }
};

export default config;
