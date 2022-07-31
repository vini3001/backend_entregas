import { Request, Response } from "express";
import { authenticateDeliveryMan } from "./authenticateDeliverymanUseCase";

export class AuthenticateDeliveryManController {
    async handle(req: Request, res: Response) {
        const { username, password } = req.body;

        const authenticateDeliveryManController = new authenticateDeliveryMan()
        const result = await authenticateDeliveryManController.execute({
            username,
            password
        })

        return res.json({ result })
    }
}