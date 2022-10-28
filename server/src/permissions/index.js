const { rule,shield } = require("graphql-shield");
const { getUserId } = require("../utils");

const rules = {
    isAuthenticatedUser: rule()((_parent, _args, context)=> {
        const userId = getUserId(context)
        return Boolean(userId)
    }),

    isPostOwner: rule()(async (_parent, _args, context) => {
        const userId = getUserId(context)
        const author = await context.prisma.post.findUnique({
            where: {
                id: Number(_args.id)
            },
        })
        .author()
        return userId === author.id
    }),
}

const permissions = shield({
    Query: {
        fetchUniqueUser: rules.isAuthenticatedUser, 
        fetchSinglePost: rules.isAuthenticatedUser,
        fetchSingleComplex: rules.isAuthenticatedUser

    }, 
    Mutation: {
        addComplex: rules.isAuthenticatedUser,
        deleteBlogPost: rules.isPostOwner

    }, 
})

module.exports = {
    permissions: permissions
}