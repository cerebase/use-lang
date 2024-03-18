import { defineConfig } from "tsup";

export default defineConfig({
    format: ["cjs", "esm"],
    entry: {
        react: "./packages/react/index.ts",
        svelte: "./packages/react/index.ts"
    },
    dts: true,
    shims: true,
    skipNodeModulesBundle: true,
    clean: true
})