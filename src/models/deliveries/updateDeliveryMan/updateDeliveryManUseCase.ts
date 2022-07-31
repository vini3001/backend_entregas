import { prisma } from "../../../database/prismaClient";

interface IUpdateDeliveryman {
    id_delivery: string;
    id_deliveryman: string
}

export class UpdateDeliveryManUseCase {
    async execute({ id_delivery, id_deliveryman }: IUpdateDeliveryman) {
        const UpdateDeliveryman = prisma.deliveries.update({
            where: {
                id: id_delivery
            }, data: {
                id_deliveryman
            }
        })
        return UpdateDeliveryman
    }
}