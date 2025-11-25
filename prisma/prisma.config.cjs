const { defineConfig } = require("@prisma/config");

module.exports = defineConfig({
  datasource: {
    db: {
      provider: "mongodb",
      url: process.env.DATABASE_URL,
    },
  },
});