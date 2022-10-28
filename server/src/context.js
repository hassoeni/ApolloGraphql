const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

function createContext(req) {
  return {
    ...req, 
    prisma 
  }
}




// WORKING CODE
// const context = {
//   prisma: prisma,
// };

// !IMPLEMENT LATER during Authentication Sprint 
// const context = async ({ req }) => {
//   const token = req.headers.authorization || ''
//   const userId = token.split(' ')[1]
//   if (userId) {
//   const {data} = await 
//}
//   if (!user) throw new AuthenticationError('you must be loggedin to query anything')
//   return {
//     user,
//     prisma: prisma
//   }
// };
module.exports = {
  createContext: createContext,
};
