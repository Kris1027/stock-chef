import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from '@/components/ui/table';
import { DeliveryProps } from '@/types/delivery';

interface DeliveryListProps {
    delivery: DeliveryProps[];
}

const DeliveryList: React.FC<DeliveryListProps> = async ({ delivery }) => {
    return (
        <div>
            <Table>
                <TableCaption className='caption-top font-semibold text-lg'>Dostawy</TableCaption>
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
                            <TableCell>{d.quantity} kg</TableCell>
                            <TableCell>{d.createdAt.toLocaleString()}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    );
};

export default DeliveryList;
