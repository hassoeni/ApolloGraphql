const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const { APP_SECRET, getUserId } = require('../utils')


async function signUpuser(parent,args,context) {

    // const postGegevens = args.data.posts
    //     ? args.data.posts.map((post) => {
    //         return { title: post.title, content: post.content || undefined }
    //     }) : []
    // 1
    const saltRounds = 10;
    const salt = bcrypt.genSaltSync(saltRounds);

    const password = await bcrypt.hash(args.password, salt)

    // 2
    const user = await context.prisma.user.create({ 
        data:
        {
            name: args.data.name,
            email: args.data.email,
            password: password, 
            // posts: {
            //     create: postGegevens
            // }
        } 
    
    })

    // 3
    const token = jwt.sign({ userId: user.id }, APP_SECRET)

    // 4
    return {
        token,
        user,
    }
}
async function signInUser(parent, args, context) {// 1
    const user = await context.prisma.user.findUnique({ where: { email: args.email } })
    if (!user) {
        throw new Error('No such user found')
    }

    // 2
    const valid = await bcrypt.compare(args.password, user.password)
    if (!valid) {
        throw new Error('Invalid password')
    }

    const token = jwt.sign({ userId: user.id }, APP_SECRET)

    // 3
    return {
        token,
        user,
    }
}
async function addComplex(parent, args, context) {
    return context.prisma.complex.create({
        data: {
            complexnaam: args.data.complexnaam,
            complexnummer: args.data.complexnummer,
            gbo: args.data.gbo,
            marktwaarde: args.data.marktwaarde,
            huur: args.data.huur,
            streefhuur: args.data.streefhuur,
            po: args.data.po,
            gebruiker: {
                connect: { email: args.authorEmail }
            }
        }
    })
}
async function updateComplex(parent, args, context) {
    const complex = await context.prisma.complex.update({
        data: {
            complexnaam: args.data.complexnaam,
            complexnummer: args.data.complexnummer,
            gbo: args.data.gbo,
            marktwaarde: args.data.marktwaarde,
            huur: args.data.huur,
            streefhuur: args.data.streefhuur,
            po: args.data.po,
        },
        where: {
            id: args.id
        }

    })
    return complex
}
async function deleteComplex(parent, args, context) {
    const complex = await context.prisma.complex.delete({
        where: {
            id: args.id,
        },
    })
    return complex
}
function deleteBlogPost(parent, args, context) {
    return context.prisma.post.delete({
        where: { id: args.id }
    })
}
function addBlogPost(parent, args, context) {
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
}

module.exports  =  {
    signInUser,
    signUpuser,
    addComplex,
    updateComplex,
    deleteComplex,
    deleteBlogPost,
    addBlogPost
}