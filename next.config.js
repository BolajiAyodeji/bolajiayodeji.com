module.exports = {
    async rewrites() {
      return [
        {
          source: "/newsletter",
          destination: "https://tinyletter.com/bolajiayodeji",
        },
        {
          source: "/blog",
          destination: "https://blog.bolajiayodeji.com",
        },
      ];
    },
  };