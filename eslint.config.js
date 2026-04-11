import tsParser from "@typescript-eslint/parser";
import tsPlugin from "@typescript-eslint/eslint-plugin";
import prettierPlugin from "eslint-plugin-prettier";
import prettierConfig from "eslint-config-prettier";

export default [
    {
        ignores: ["node_modules/**", "dist/**"]
    },
    {
        files: ["src/**/*.ts"],
        plugins: {
            "@typescript-eslint": tsPlugin,
            "prettier": prettierPlugin
        },
        languageOptions: {
            parser: tsParser,
            ecmaVersion: "latest",
            sourceType: "module"
        },
        rules: {
            ...tsPlugin.configs.recommended.rules,
            ...prettierConfig.rules,
            "prettier/prettier": "error",
            "@typescript-eslint/no-unused-vars": "warn",
            "@typescript-eslint/no-explicit-any": "error"
        }
    } 
];

