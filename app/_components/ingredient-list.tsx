import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from '@/components/ui/table';

interface IngredientProps {
    id: string;
    name: string;
    quantity: number;
    createdAt: Date;
    updatedAt: Date;
    deliveries: {
        id: string;
        ingredientId?: string | null;
        newQuantity: number;
        createdAt: Date;
        updatedAt: Date;
    }[];
}

interface IngredientListProps {
    ingredients: IngredientProps[];
}

const IngredientList: React.FC<IngredientListProps> = async ({ ingredients }) => {
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
