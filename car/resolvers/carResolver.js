export const carResolvers = {
    Query : {
        getUsers : (_, __, { dataSources }) => dataSources.usersApi.getUsers(),
        getUser : (_, { id }, { dataSources }) => dataSources.usersApi.getUser(id)
    },
    Mutation : {
        adicionaUser : async (_, user, { dataSources }) => dataSources.usersApi.adicionaUser(user),
        atualizaUser : async (_, novosDados, { dataSources }) => dataSources.usersApi.atualizaUser(novosDados),
        removeUser : async (_, id, {dataSources}) => dataSources.usersApi.removeUser(id)
    }
}