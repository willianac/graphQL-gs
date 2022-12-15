import { ApolloServer } from "@apollo/server"
import { startStandaloneServer } from "@apollo/server/standalone"

const typeDefs = `
    type Car {
        model : String,
        brand : String
    }

    type Query {
        cars : [Car]
    }
`

const cars = [
    {
        model : "Polo",
        brand : "Volkswagen"
    },
    {
        model : "Elantra",
        brand : "Hyundai"
    },
    {
        model : "Focus",
        brand : "Ford"
    }
]

const resolvers = {
    Query : {
        cars : () => cars
    }
}

const server = new ApolloServer({ typeDefs, resolvers })

const { url } = await startStandaloneServer(server, {
    listen : {port : 4000}
})

console.log(`Server is running on ${url}`)