import { prisma } from "../../../database/prismaClient";

interface IUpdateEndDate {
    id_delivery: string;
    id_deliveryman: string
}

export class updateEndDateUseCase {
    async execute({ id_delivery, id_deliveryman }: IUpdateEndDate) {
        const UpdateDeliveryman = prisma.deliveries.updateMany({
            where: {
                id: id_delivery,
                id_deliveryman
            }, data: {
                end_at: new Date()
            }
        })
        return UpdateDeliveryman
    }
}