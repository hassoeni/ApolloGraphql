// context.prisma.something lands here
const { DateTimeResolver } = require('graphql-scalars')

 const  resolvers = {
    Query: {
        //Resolver that fetches all the users 
        fetchAllUsers: (_parent, _args, context) => {
            return context.prisma.user.findMany()
        },

        // resolver that fetches all the posts 
        fetchAllPosts: (parent, args, context) => {
            return context.prisma.post.findMany()
        },

        // resolver that fetches a single post given a single ID 
        fetchSinglePost: (parent, args, context) => {
            return context.prisma.post.findUnique({
                where: { id: args.id || undefined }
            })
        },

        // fetches a user by email
        // !TODO make sure to add token and hash from becrypt if there is a token return user  
        fetchUniqueUser: (parent, args, context) => {
            return context.prisma.user.findUnique({
                where: { email: args.email || undefined }
            })
        }


    },

    Mutation: {
        // makes a user 
        //!TODO add token and hash for password, store token in DB using Prisma
        signUpuser: (parent, args, context) => {
            //  password hash with bycrypt 
            // user create give data as params 
            // token jwt signin 
            // return token and user 
            // return posts



            const postGegevens = args.data.posts
                ? args.data.posts.map((post) => {
                    return { title: post.title, content: post.content || undefined }
                }) : []

            return context.prisma.user.create({
                data: {
                    name: args.data.name,
                    email: args.data.email,
                    password: args.data.password,
                    posts: {
                        create: postGegevens
                    }
                },
            })
        },

        deleteBlogPost: (parent,args,context) => {
            return context.prisma.post.delete({
                where: {id: args.id}
            })
        },

        // makes a blog post you need an email to make one! 
        addBlogPost: (parent, args, context) => {
            if (!args.authorEmail) {
                throw new Error("You need to provide a valid email to make blog post")
            } else {

                return context.prisma.post.create({
                    data: {
                        title: args.data.title,
                        content: args.data.content,
                        published: args.data.published,
                        author: {
                            connect: { email: args.authorEmail }
                        }
                    }
                })
            }
        }, 

         signInUser: async (parent, args,context) => {
            const user = await context.prisma.user.findUnique({
                where: {email: args.email}
            })
            if (!user) {
                throw new Error('No such user found')
            }
            // todo! compare hashed password

            // if not valid throw error 

            // else sign in user 


            return user 
        }
    },

    // Returs the posts allocated towards the user
    User: {
        posts: (parent, args, context) => {
            return context.prisma.user.findUnique({
                where: { id: parent.id }
            })
                .posts()
        },
    },

    // Returns the user allocated towards a post
    Post: {
        author: (parent, _args, context) => {
            return context.prisma.post.findUnique({
                where: { id: parent.id }
            })
                .author()
        },
    },
    DateTime: DateTimeResolver,
}

module.exports = {
    resolvers,
}