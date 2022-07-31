import { prisma } from "../../../../database/prismaClient";


export class FindAllDeliveriesDeliverymanUseCase {
    async execute(id_deliveryman: string) {
        const findAllDeliveries = await prisma.deliveryman.findMany({
            where: {
                id: id_deliveryman
            }, select: {
                Deliveries: true,
                id: true,
                username: true
            }
        })
        return findAllDeliveries
    }
}