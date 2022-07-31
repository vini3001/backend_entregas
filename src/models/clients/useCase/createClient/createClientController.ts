import { Request, Response } from 'express'
import { allowedNodeEnvironmentFlags } from 'process';
import { createClientUseCase } from './createClientUseCase'

export class CreateClientController {
    async handle(req: Request, res: Response) {
        const { username, password } = req.body;

        console.log("Name " + username);
        console.log("Password " + password)

        const createclient = new createClientUseCase()
        const result = await createclient.execute({
            username,
            password
        })
        res.json({ result })
    }
}