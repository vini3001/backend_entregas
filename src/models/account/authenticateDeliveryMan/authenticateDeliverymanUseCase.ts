import { prisma } from "../../../database/prismaClient"
import { compare } from 'bcrypt'
import { sign } from 'jsonwebtoken'

interface IAuthenticateDeliveryMan {
    username: string
    password: string
}

export class authenticateDeliveryMan {
    async execute({ username, password }: IAuthenticateDeliveryMan) {
        //receber username e password
        //verificar usuário
        const deliveryman = await prisma.deliveryman.findFirst(
            { where: { username } }
        )
        if (!deliveryman) {
            throw Error("username or password invalid!")
        }
        //verificar se a senha corresponde ao usuário
        const passwordCompare = await compare(password, deliveryman.password)
        if (!passwordCompare) {
            throw Error("username or password invalid!")
        }
        //gerar o token  
        const token = sign({ username }, "c39d0e1f432c51ab7b6554ef93627ea7", {
            subject: deliveryman.id,
            expiresIn: "1d"
        })
        return token
    }
}