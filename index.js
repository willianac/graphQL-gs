import { ApolloServer } from "@apollo/server"
import { startStandaloneServer } from "@apollo/server/standalone"
import { typeDefs } from "./car/schemas/car.js"
import { carResolvers } from "./car/resolvers/carResolver.js"
import UsersAPI from "./car/dataSource/user.js"

const resolvers = [carResolvers]

const server = new ApolloServer({ typeDefs, resolvers,  })

const { url } = await startStandaloneServer(server, {
    listen : {port : 4000},
    context : () => {
        return {
            dataSources : {
                usersApi : new UsersAPI
            }
        }
    }
})

console.log(`Server is running on ${url}`)