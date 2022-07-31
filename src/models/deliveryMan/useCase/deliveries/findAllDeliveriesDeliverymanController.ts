import { Request, Response } from "express";
import { resolve } from "path";
import { FindAllDeliveriesDeliverymanUseCase } from "./findAllDeliveriesDeliverymanUseCase";


export class FindAllDeliveriesDeliverymanController {
    async handle(req: Request, res: Response) {
        const { id_deliveryman } = req;
        console.log(id_deliveryman)
        const findAllDeliveriesUseCase = new FindAllDeliveriesDeliverymanUseCase()
        const result = await findAllDeliveriesUseCase.execute(id_deliveryman)
        return res.json(result)
    }
}