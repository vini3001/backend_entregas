import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken"

interface IPayload {
    sub: string
}

export async function confirmAuthenticateClient(req: Request, res: Response, next: NextFunction) {
    const authHeader = req.headers.authorization
    if (!authHeader) {
        return res.status(401).json({
            message: "Token is missing!"
        })
    }
    //Bearer {Token}
    //[0] Bearer
    //[1] {Token}
    const [, token] = authHeader.split(" ")

    try {
        const { sub } = verify(token, "c39d0e1f432c51ab7b6554ef93627ea9") as IPayload
        console.log(sub)
        req.id_client = sub
        return next();

    } catch (err) {
        return res.status(401).json({
            message: "Token is missing!"
        })
    }
}