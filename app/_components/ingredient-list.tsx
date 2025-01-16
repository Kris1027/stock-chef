import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from '@/components/ui/table';
import DeleteButton from './delete-button';
import { IngredientProps } from '@/types/ingredients';

interface IngredientListProps {
    ingredients: IngredientProps[];
}

const IngredientList: React.FC<IngredientListProps> = ({ ingredients }) => {
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
                        <TableHead>Akcje</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {ingredients.map((ingredient) => (
                        <TableRow key={ingredient.id}>
                            <TableCell>{ingredient.name}</TableCell>
                            <TableCell>{ingredient.quantity} kg</TableCell>
                            <TableCell>{ingredient.updatedAt.toLocaleString()}</TableCell>
                            <TableCell>
                                <DeleteButton id={ingredient.id} />
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    );
};

export default IngredientList;
