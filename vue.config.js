module.exports = {
  devServer: {
    proxy:
      process.env.NODE_ENV === "production"
        ? "https://vote.medunions.tw"
        : "http://localhost:8081"
  }
};
