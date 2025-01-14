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

const IngredientList = async () => {
    const ingredients = await prisma.ingredient.findMany();

    return (
        <Table>
            <TableCaption>Stan Magazynowy</TableCaption>
            <TableHeader>
                <TableRow>
                    <TableHead>Składnik</TableHead>
                    <TableHead>Ilość</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {ingredients.map((ingredient) => (
                    <TableRow key={ingredient.id}>
                        <TableCell>{ingredient.name}</TableCell>
                        <TableCell>{ingredient.quantity} gram</TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    );
};

export default IngredientList;
