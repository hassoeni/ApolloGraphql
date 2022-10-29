async function complexen(parent, args, context) {
    const where = args.filter
        ? {
              complexnaam: {
                  contains: args.filter,
              },
          }
        : {};

    const complex = await context.prisma.complex.findMany({
        skip: args.skip,
        take: args.take,
        where,
        orderBy: args.orderBy,
    });

    return complex;
}

function fetchAllUsers(_parent, _args, context) {
    return context.prisma.user.findMany();
}
function fetchUniqueUser(_parent, args, context) {
    return context.prisma.user.findUnique({
        where: { email: args.email || undefined },
    });
}
function fetchAllComplexen(_parent, _args, context) {
    return context.prisma.complex.findMany();
}
function fetchSingleComplex(parent, args, context) {
    return context.prisma.complex.findUnique({
        where: { id: args.id || undefined },
    });
}
function fetchAllPosts(_parent, _args, context) {
    return context.prisma.post.findMany();
}
function fetchSinglePost(parent, args, context) {
    return context.prisma.post.findUnique({
        where: { id: args.id || undefined },
    });
}

module.exports = {
    complexen,
    fetchAllComplexen,
    fetchAllPosts,
    fetchAllUsers,
    fetchSingleComplex,
    fetchSinglePost,
    fetchUniqueUser,
};
