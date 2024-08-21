module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy({ "./src/img": "/img" });
  eleventyConfig.addPassthroughCopy({ "./src/Inter": "/Inter" });
  return {
    dir: {
      input: "src",
      output: "site",
    },
  };
};