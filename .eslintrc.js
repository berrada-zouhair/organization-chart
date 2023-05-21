module.exports = {
  env: {
    es6: true,
    node: true,
    jest: true,
  },
  extends: [
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    "eslint:recommended",
    "airbnb-base",
    "plugin:jest/recommended",
    "plugin:prettier/recommended",
    "prettier/@typescript-eslint",
    "plugin:cypress/recommended",
  ],
  parser: "@typescript-eslint/parser",
  plugins: [
    "react-hooks",
    "@typescript-eslint",
    "prettier",
    "import",
    "disable",
  ],
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly",
    FileReader: "readonly",
    FormData: "readonly",
    JSX: true,
  },
  rules: {
    "no-plusplus": [
      "error",
      {
        allowForLoopAfterthoughts: true,
      },
    ],
    "no-shadow": "off", // Fixing an eslint declaring false-positive no-shadow error on enum
    "@typescript-eslint/no-shadow": ["error"], // so we use @typescript-eslint/no-shadow to fix it : https://github.com/typescript-eslint/typescript-eslint/issues/2483
    "func-names": 0,
    "no-bitwise": 0,
    "@typescript-eslint/camelcase": 0,
    camelcase: 0,
    "@typescript-eslint/interface-name-prefix": 0,
    "no-underscore-dangle": 0,
    "import/prefer-default-export": 0,
    "class-methods-use-this": 0,
    "no-unused-expressions": ["error", { allowShortCircuit: true }],
    "no-param-reassign": 0,
    "react/prop-types": 0,
    "react/style-prop-object": ["error", { allow: ["FormattedNumber"] }],
    "@typescript-eslint/no-empty-function": 0,
    "import/extensions": [
      "error",
      "ignorePackages",
      {
        ts: "never",
        tsx: "never",
        js: "never",
      },
    ],
    // Inversify
    "no-useless-constructor": 0,
    "no-empty-function": ["error", { allow: ["constructors"] }],
    // turn on errors for missing imports
    "import/no-unresolved": "error",
    "no-use-before-define": 0,
    "@typescript-eslint/no-use-before-define": ["error", { functions: false }],
    "react-hooks/exhaustive-deps": "error",
    "no-unused-vars": "off",
    "@typescript-eslint/no-unused-vars": ["error"],
  },
  overrides: [
    {
      // disable rules for test files
      files: [
        "*.spec.ts",
        "*.spec.tsx",
        "*.spec.js",
        "*.integration-spec.ts",
        "*.fixture_factory.ts",
        "setupTests.ts",
      ],
      rules: {
        "import/no-extraneous-dependencies": 0,
        "no-multi-assign": 0,
        "@typescript-eslint/ban-ts-ignore": 0,
        "no-empty-function": 0,
      },
    },
    {
      files: ["*.js"],
      rules: {
        "@typescript-eslint/explicit-function-return-type": 0,
        "@typescript-eslint/no-var-requires": 0,
        "@typescript-eslint/no-use-before-define": 0,
        "@typescript-eslint/no-this-alias": 0,
        "@typescript-eslint/no-empty-function": 0,
      },
    },
    {
      files: ["*fixture_factory.ts"],
      rules: {
        "import/no-extraneous-dependencies": 0,
      },
    },
  ],
  settings: {
    react: {
      version: "detect",
    },
    "import/resolver": {
      node: {
        extensions: [".js", ".jsx", ".ts", ".tsx"],
        paths: ["src"],
      },
    },
  },
};
