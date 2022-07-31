import { prisma } from "../../../database/prismaClient"
import { compare } from 'bcrypt'
import { sign } from 'jsonwebtoken'

interface IAuthenticateClient {
    username: string
    password: string
}

export class authenticateClient {
    async execute({ username, password }: IAuthenticateClient) {
        //receber username e password
        //verificar usuário
        const client = await prisma.clients.findFirst(
            { where: { username } }
        )
        if (!client) {
            throw Error("username or password invalid!")
        }
        //verificar se a senha corresponde ao usuário
        const passwordCompare = await compare(password, client.password)
        if (!passwordCompare) {
            throw Error("username or password invalid!")
        }
        //gerar o token  
        const token = await sign({ username }, "c39d0e1f432c51ab7b6554ef93627ea9", {
            subject: client.id,
            expiresIn: "1d"
        })
        return token
    }
}