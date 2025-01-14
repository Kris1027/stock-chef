import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from '@/components/ui/table';

const DeliveryList = async ({ delivery }) => {
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
