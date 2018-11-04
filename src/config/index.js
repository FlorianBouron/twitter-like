const defaultConfig = {
  devToolsDisabled: false,
  sessionStorageUserID: "twitter-like-userid",
  apiUrl: "https://jsonplaceholder.typicode.com/"
};

const env = process.env.REACT_APP_ENV || "development";
const specificConfig = require(`./${env}.js`).default;

export default Object.assign(defaultConfig, specificConfig);
