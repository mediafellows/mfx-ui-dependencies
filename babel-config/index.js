module.exports = {
  presets: [
    "@babel/preset-env",
    "@babel/preset-react",
    "@babel/preset-typescript",
  ],
  plugins: [
    ["@babel/plugin-proposal-decorators", { legacy: true }],
    "@babel/plugin-transform-runtime",
  ],
  sourceType: "unambiguous", // https://github.com/babel/babel/issues/8900#issuecomment-431240426
};
