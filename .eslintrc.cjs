module.exports = {
  parser: "@typescript-eslint/parser",
  extends: [
    "airbnb",
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended",
  ],
  plugins: ["@typescript-eslint", "prettier"],
  rules: {
    "react/react-in-jsx-scope": "off",
    "jsx-a11y/no-static-element-interactions": "off",
    "no-console": "off",
    "@typescript-eslint/no-unused-vars": "off",
    "import/no-unresolved": "off",
    "no-unused-vars": "warn",
    "no-underscore-dangle": "off",
    "react/destructuring-assignment": "off",
    "import/no-extraneous-dependencies": "off",
    "react/function-component-definition": "off",
    "prettier/prettier": "error",
    "react/no-unused-prop-types": ["warn", {}],
    "react/jsx-filename-extension": [1, { extensions: [".tsx"] }],
    "import/extensions": [
      "off",
      "ignorePackages",
      {
        tsx: "never",
      },
    ],
  },
};
