module.exports = {
    async rewrites() {
      return [
        {
          source: "/newsletter",
          destination: "https://bawd.bolajiayodeji.com",
        },
        {
          source: "/blog",
          destination: "https://blog.bolajiayodeji.com",
        },
      ];
    },
  };