import { DeliveryManUseCase } from "./createDeliveryManUseCase";
import { Response, Request } from 'express'

export class CreateDeliveryManController {
    async handle(req: Request, res: Response) {
        const { username, password } = req.body;

        console.log("Name " + username);
        console.log("Password " + password)

        const deliveryman = new DeliveryManUseCase()
        const result = await deliveryman.execute({
            username,
            password
        })
        res.json({ result })
    }
}