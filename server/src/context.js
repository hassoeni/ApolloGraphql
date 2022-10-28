const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();
// WORKING CODE
const context = {
  prisma: prisma,
};

// !IMPLEMENT LATER during Authentication Sprint 
// const context = ({ req }) => {
//   const token = req.headers.authorization || ''
//   const user = getUser(token)
//   if (!user) throw new AuthenticationError('you must be loggedin to query anything')
//   return {
//     user,
//     prisma: prisma
//   }
// };
module.exports = {
  context: context,
};
