import "dotenv/config";
import adapter from "@sveltejs/adapter-vercel";
import { mdsvex } from "mdsvex";
import preprocess from "svelte-preprocess";

/** @type {import('@sveltejs/kit').Config} */
const config = {
    extensions: [".svelte", ".md"],
    preprocess: [
        preprocess({
            typescript: {
                tsconfigFile: "./tsconfig.json"
            }
        }),
        mdsvex({
            extensions: ['.md']
        })
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
