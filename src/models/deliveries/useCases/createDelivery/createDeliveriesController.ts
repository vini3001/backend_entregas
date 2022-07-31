import { Request, Response } from "express";
import { CreateDeliveryUseCase } from "./createDeliveriesUseCase";


export class CreateDeliveriesController {
    async handle(req: Request, res: Response) {
        const { item_name } = req.body
        const { id_client } = req
        const createDeliveryUseCase = new CreateDeliveryUseCase()
        const result = await createDeliveryUseCase.execute({
            item_name,
            id_client
        })
        return res.json(result)
    }
}