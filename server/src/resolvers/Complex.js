function gebruiker(parent,_args, context) {
    return context.prisma.complex.findUnique({
        where: {
            id: parent.id
        }
    })
        .user()
}

module.exports = {
    gebruiker
}