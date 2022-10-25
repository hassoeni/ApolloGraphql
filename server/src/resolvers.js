// context.prisma.something lands here
const { DateTimeResolver } = require('graphql-scalars')

const resolvers = {
    Query: {
        fetchAllUsers: (_parent, _args, context) => {
            return context.prisma.user.findMany()
        },
        fetchAllPosts: (parent, args, context) => {
            return context.prisma.post.findMany()
        }
    },

    // Returs the posts allocated towards the user
    User: {
        posts: (parent, args, context) => {
            return context.prisma.user.findUnique({
                where: { id: parent.id}
            })
            .posts()
        },
    },

    // Returns the user allocated towards a post
    Post: {
        author: (parent, _args, context) => {
            return context.prisma.post.findUnique({
                where: {id: parent.id}
            })
            .author()
        },
    },
    DateTime: DateTimeResolver,
}

module.exports = {
    resolvers,
}