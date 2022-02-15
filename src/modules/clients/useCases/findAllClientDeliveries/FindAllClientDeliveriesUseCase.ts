import { prisma } from "../../../../database/prismaClient";

export class FindAllClientDeliveriesUseCase {
    async execute(id_client: string) {
        const deliveries = await prisma.clients.findMany({
            where: {
                id: id_client,
            },
            include: {
                deliveries: true,
            },
        });

        return deliveries;
    }
}