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
    quantity: number;
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

interface ConsumptionListProps {
    consumption: DeliveryProps[];
}

const ConsumptionList: React.FC<ConsumptionListProps> = async ({ consumption }) => {
    return (
        <div className='h-screen overflow-scroll'>
            <Table>
                <TableCaption className='caption-top font-semibold text-lg'>Zużycie</TableCaption>
                <TableHeader>
                    <TableRow>
                        <TableHead>Składnik</TableHead>
                        <TableHead>Ilość</TableHead>
                        <TableHead>Data odjęcia</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {consumption.map((d) => (
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

export default ConsumptionList;
