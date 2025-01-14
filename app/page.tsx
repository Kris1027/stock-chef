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

const HomePage = async () => {
    const ingredients = await prisma.ingredient.findMany();

    return (
        <main>
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

export default HomePage;
