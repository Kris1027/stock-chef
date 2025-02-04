import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from '@/components/ui/table';
import { ConsumptionProps } from '@/types/consumption';

interface ConsumptionListProps {
    consumption: ConsumptionProps[];
}

const ConsumptionList: React.FC<ConsumptionListProps> = async ({ consumption }) => {
    return (
        <div>
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
