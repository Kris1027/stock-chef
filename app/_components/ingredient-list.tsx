import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from '@/components/ui/table';

export interface IngredientProps {
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
        <div className='h-screen overflow-scroll'>
            <Table>
                <TableCaption className='caption-top font-semibold text-lg'>
                    Stan Magazynowy
                </TableCaption>
                <TableHeader>
                    <TableRow>
                        <TableHead>Składnik</TableHead>
                        <TableHead>Ilość</TableHead>
                        <TableHead>Ostatnia dostawa</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {ingredients.map((ingredient) => (
                        <TableRow key={ingredient.id}>
                            <TableCell>{ingredient.name}</TableCell>
                            <TableCell>{ingredient.quantity} gram</TableCell>
                            <TableCell>{ingredient.updatedAt.toLocaleString()}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    );
};

export default IngredientList;
