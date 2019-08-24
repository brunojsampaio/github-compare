module.exports = {
  env: {
    browser: true,
    jest: true,
    es6: true
  },
  extends: ["react-app", "airbnb"],
  plugins: ["import", "jsx-a11y", "react"],
  rules: {
    "react/jsx-filename-extension": ["error", { extensions: [".jsx", ".js"] }],
    "import/prefer-default-export": "off",
    "react/jsx-one-expression-per-line": "off"
  }
};
