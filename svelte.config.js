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
        adapter: adapter(),
        csp: {
            mode: "hash",
            directives: {
                "connect-src": ["*"],
                "default-src": ["none"],

                "font-src": ["self"],
                "style-src": ["self", "unsafe-inline"],
                "img-src": ["*", "data:"],
                "manifest-src": ["self"],
                "worker-src": ["self"],

                "object-src": ["none"],
                "frame-src": [
                    "self",
                    "challenges.cloudflare.com"
                ],

                "script-src": [
                    "self",
                    "wasm-unsafe-eval",
                    "challenges.cloudflare.com",

                    // eslint-disable-next-line no-undef
                    process.env.WEB_PLAUSIBLE_HOST ? process.env.WEB_PLAUSIBLE_HOST : "",

                    // hash of the theme preloader in app.html
                    "sha256-g67gIjM3G8yMbjbxyc3QUoVsKhdxgcQzCmSKXiZZo6s=",
                ],

                "frame-ancestors": ["none"]
            }
        },
        env: {
            publicPrefix: 'WEB_'
        },
        version: {
            pollInterval: 60000
        },
        paths: {
            relative: false
        },
        alias: {
            $components: 'src/components',
            $i18n: 'i18n',
        }
    }
};

export default config;
