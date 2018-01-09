exports.modifyWebpackConfig = ({ config, stage }) => {
  if (stage === "build-html") {
    config.loader("null", {
      test: /bad-module/,
      loader: "null-loader",
    });
  }
};

