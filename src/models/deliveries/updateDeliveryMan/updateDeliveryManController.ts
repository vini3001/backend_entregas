import { Request, Response } from "express";
import { prisma } from "../../../database/prismaClient";
import { UpdateDeliveryManUseCase } from "./updateDeliveryManUseCase";


export class UpdateDeliveryManController {
    async handle(req: Request, res: Response) {
        const { id_deliveryman } = req;
        const { id: id_delivery } = req.params
        const UpdateDeliveryman = new UpdateDeliveryManUseCase()
        const result = await UpdateDeliveryman.execute({
            id_delivery,
            id_deliveryman
        })
        return res.json({ result })
    }
}