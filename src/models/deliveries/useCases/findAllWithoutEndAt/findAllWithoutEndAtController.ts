import { Request, Response } from "express"
import { prisma } from "../../../../database/prismaClient"


export class findAllWithoutEndAtController {
    async handle(req: Request, res: Response) {
        const FindAllWithoutEndAtusecase = new findAllWithoutEndAtController()
        const findall = await prisma.deliveries.findMany({})
        return res.json({ findall })
    }
}