import { RESTDataSource } from "@apollo/datasource-rest"

class UsersAPI extends RESTDataSource {
    baseURL = "http://localhost:3000/"

    async getUsers() {
        const user = await this.get('/users')
        return user.map(async (user) => {
            return {
                id : user.id,
                nome : user.nome,
                ativo : user.ativo,
                email : user.email,
                role : await this.get(`/roles/${user.role}`)
            }
        })
    }

    async getUser(id) {
        const user = await this.get(`/users/${id}`)
        user.role = await this.get(`/roles/${user.role}`)
        return user
    }

    async adicionaUser(user) {
        const users = await this.get('/users')
        user.id = users.length + 1
        const role = await this.get(`roles?type=${user.role}`)
        await this.post('users', {body : {...user, role : role[0].id}})
        return ({
            ...user,
            role : role[0]
        })
    }

    async atualizaUser(novosDados) {
        const role = await this.get(`/roles?type=${novosDados.role}`)
        await this.put(`/users/${novosDados.id}`, { body : {...novosDados, role : role[0].id} })
        return {
            ...novosDados,
            role : role[0]
        }
    }

    async removeUser(id) {
        console.log(id)
        await this.delete(`/users/${id.id}`)
        return {
            id : `ID ${id} Deletado!`
        }
    }
}

export default UsersAPI;