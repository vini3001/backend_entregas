import { Request, Response } from "express";
import { authenticateClient } from "./authenticateClientUseCase";

export class AuthenticateClientController {
    async handle(req: Request, res: Response) {
        const { username, password } = req.body;

        const authenticateClientUseCase = new authenticateClient()
        const result = await authenticateClientUseCase.execute({
            username,
            password
        })

        return res.json({ result })
    }
}