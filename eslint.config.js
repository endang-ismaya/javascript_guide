import globals from "globals";
import pluginJs from "eslint-plugin-n";
import pluginReact from "eslint-plugin-react";
import pluginPrettier from "eslint-plugin-prettier";
import eslintConfigPrettier from "eslint-config-prettier";
import babelParser from "@babel/eslint-parser";

export default [
  {
    languageOptions: {
      parser: babelParser,
      parserOptions: {
        requireConfigFile: false,
        babelOptions: {
          babelrc: false,
          configFile: false
        }
      },
      globals: {
        ...globals.browser,
        ...globals.node
      }
    }
  },
  {
    ignores: ["node_modules/**"]
  },
  pluginJs.configs["flat/recommended"],
  {
    plugins: {
      react: pluginReact,
      prettier: pluginPrettier
    },
    rules: {
      ...pluginReact.configs.flat.recommended?.rules,
      ...eslintConfigPrettier.rules,
      "prettier/prettier": "error",
      "no-console": "off",
      "consistent-return": "off",
      "func-names": "off",
      "object-shorthand": "off",
      "no-process-exit": "off",
      "no-param-reassign": "off",
      "no-return-await": "off",
      "no-underscore-dangle": "off",
      "class-methods-use-this": "off",
      "no-plusplus": "off",
      "prefer-template": "off",
      "no-alert": "off",
      "no-var": "off",
      "prefer-const": "off",
      "vars-on-top": "off",
      "prefer-destructuring": ["error", { object: true, array: false }],
      "no-unused-vars": ["off", { argsIgnorePattern: "req|res|next|val" }],
      "react/prop-types": "off",
      "react/react-in-jsx-scope": "off"
    }
  }
];
