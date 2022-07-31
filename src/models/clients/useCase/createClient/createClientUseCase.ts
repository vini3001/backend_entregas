import { executionAsyncResource } from "async_hooks"
import { hash } from "bcrypt"
import { maxHeaderSize } from "http"
import { prisma } from "../../../../database/prismaClient"

interface ICreateClient {
    username: string
    password: string
}
export class createClientUseCase {
    async execute({ username, password }: ICreateClient) {
        //Validar se o usuário existe
        const clientExists = await prisma.clients.findFirst({
            where: {
                username
            }
        })
        if (clientExists) {
            throw new Error("Client already exists")
        }
        //Criptografar a senha
        let size = 10
        const hashPassword = await hash(password, size)
        console.log("**", hashPassword)
        //Salvar o Client
        const client = await prisma.clients.create({
            data: {
                username,
                password: hashPassword
            }
        })
        return client
    }
}