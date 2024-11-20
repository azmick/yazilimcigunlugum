const React = require("react");
const ThemeProvider = require("./src/context/ThemeContext");

exports.onRenderBody = ({ setHtmlAttributes }) => {
  setHtmlAttributes({ lang: `en` });
};

exports.wrapRootElement = ({ element }) => {
  return <ThemeProvider>{element}</ThemeProvider>;
};
