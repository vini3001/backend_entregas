import { hash } from "bcrypt"
import { prisma } from "../../../../database/prismaClient"

interface ICreateDeliveryMan {
    username: string,
    password: string
}

export class DeliveryManUseCase {
    async execute({ username, password }: ICreateDeliveryMan) {
        //Validar se o usuário existe
        const DeliveryManExists = await prisma.deliveryman.findFirst({
            where: {
                username
            }
        })
        if (DeliveryManExists) {
            throw new Error("delivery man already exists")
        }
        //Criptografar a senha
        let size = 10
        const hashPassword = await hash(password, size)
        console.log("**", hashPassword)
        //Salvar o Client
        const deliveryman = await prisma.deliveryman.create({
            data: {
                username,
                password: hashPassword
            }
        })
        return deliveryman
    }
}