import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { SubtractIngredientsAction } from '../_actions/subtract-ingredients-action';
import { IngredientProps } from '@/types/ingredients';

interface SubtractIngredientsFormProps {
    ingredients: IngredientProps[];
}

const SubtractIngredientsForm: React.FC<SubtractIngredientsFormProps> = ({ ingredients }) => {
    return (
        <form action={SubtractIngredientsAction} className='flex flex-col gap-4'>
            <h2 className='text-center text-2xl font-bold'>Zużycie</h2>
            <select name='ingredient'>
                {ingredients.map((i) => (
                    <option key={i.id} value={i.id}>
                        {i.name}
                    </option>
                ))}
            </select>
            <Input type='number' name='newQuantity' placeholder='ilość w kg' />
            <Button type='submit'>Odejmij</Button>
        </form>
    );
};

export default SubtractIngredientsForm;
