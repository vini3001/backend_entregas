import { Request, Response } from "express";
import { prisma } from "../../../database/prismaClient";
import { updateEndDateUseCase } from "./updateEndDateUseCase";


export class UpdateEndAtController {
    async handle(req: Request, res: Response) {
        const { id_deliveryman } = req;
        const { id: id_delivery } = req.params
        const UpdateDeliveries = new updateEndDateUseCase()
        const result = await UpdateDeliveries.execute({
            id_delivery,
            id_deliveryman
        })
        return res.json({ result })
    }
}