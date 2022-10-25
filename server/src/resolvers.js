// context.prisma.something lands here 

const resolvers = {
    Query: {
        fetchAllUsers: (_parent, _args, context) => {
            return context.prisma.user.findMany()
        }
    }
}

module.exports = {
    resolvers,
}