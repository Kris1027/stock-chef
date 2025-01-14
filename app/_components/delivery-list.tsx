import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from '@/components/ui/table';
import { prisma } from '@/prisma/prisma';

const DeliveryList = async () => {
    const delivery = await prisma.delivery.findMany({
        include: {
            Ingredient: true,
        },
    });
    console.log(delivery);

    return (
        <Table>
            <TableCaption>Dostawy</TableCaption>
            <TableHeader>
                <TableRow>
                    <TableHead>Składnik</TableHead>
                    <TableHead>Ilość</TableHead>
                    <TableHead>Data dostawy</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {delivery.map((d) => (
                    <TableRow key={d.id}>
                        <TableCell>{d.Ingredient?.name}</TableCell>
                        <TableCell>{d.newQuantity} gram</TableCell>
                        <TableCell>{d.createdAt.toLocaleDateString()}</TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    );
};

export default DeliveryList;
