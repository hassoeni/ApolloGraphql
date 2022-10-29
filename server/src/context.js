const { PrismaClient } = require("@prisma/client");
const { getUserId } = require("./utils");
const prisma = new PrismaClient();

function createContext({req}) {
  return {
    ...req, 
    prisma,
    userId:
      req && req.headers.authorization
        ? getUserId(req)
        : null
  }
}

module.exports = {
  createContext: createContext,
};
