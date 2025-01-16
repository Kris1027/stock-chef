import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from '@/components/ui/table';

interface DeliveryProps {
    id: string;
    ingredientId?: string | null;
    newQuantity: number;
    createdAt: Date;
    updatedAt: Date;
    Ingredient?: {
        id: string;
        name: string;
        quantity: number;
        createdAt: Date;
        updatedAt: Date;
    } | null;
}

interface DeliveryListProps {
    delivery: DeliveryProps[];
}

const DeliveryList: React.FC<DeliveryListProps> = async ({ delivery }) => {
    return (
        <div className='h-screen overflow-scroll'>
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
                            <TableCell>{d.newQuantity} gram</TableCell>
                            <TableCell>{d.createdAt.toLocaleString()}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    );
};

export default DeliveryList;
