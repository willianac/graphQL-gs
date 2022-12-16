export const typeDefs = `
type User {
    nome: String
    ativo: Boolean
    email: String
    role : Role!
}

type Role {
    id : ID
    type : String
}

type Query {
    getUsers : [User]
    getUser(id : ID) : User
}

type Mutation {
    adicionaUser(nome : String!, ativo : Boolean!, email : String, role : String!) : User!
    atualizaUser(id : ID!, nome : String!, ativo : Boolean!, email : String, role : String!) : User!
    removeUser(id : ID!) : ID!
}
`