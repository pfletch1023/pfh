require("dotenv").config();

const path = require("path");
const webpack = require("webpack");

module.exports = {
  webpack: config => {
    config.plugins.push(
      new webpack.DefinePlugin({
        "process.env.NODE_ENV": JSON.stringify(process.env.NODE_ENV),
        "process.env.GA_ID": JSON.stringify(process.env.GA_ID)
      })
    );
    return config;
  }
};
