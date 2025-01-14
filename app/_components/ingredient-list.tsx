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
        <main className='p-4 max-w-4xl mx-auto'>
            <Table>
                <TableCaption>Stan Magazynowy</TableCaption>
                <TableHeader>
                    <TableRow>
                        <TableHead>Składnik</TableHead>
                        <TableHead>Ilość</TableHead>
                        <TableHead>Data dodania</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {ingredients.map((ingredient) => (
                        <TableRow key={ingredient.id}>
                            <TableCell>{ingredient.name}</TableCell>
                            <TableCell>{ingredient.quantity} gram</TableCell>
                            <TableCell>{ingredient.createdAt.toLocaleDateString()}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </main>
    );
};

export default IngredientList;
