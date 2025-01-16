import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { SubtractIngredientsAction } from '../_actions/subtract-ingredients-action';
import { IngredientProps } from '@/types/ingredients';
import Combobox from './combobox';

interface SubtractIngredientsFormProps {
    ingredients: IngredientProps[];
}

const SubtractIngredientsForm: React.FC<SubtractIngredientsFormProps> = ({ ingredients }) => {
    return (
        <div>
            <h2 className='text-center text-2xl font-bold'>Zużycie</h2>
            <form action={SubtractIngredientsAction} className='flex gap-4'>
                <Combobox ingredients={ingredients} />
                <Input type='number' name='newQuantity' placeholder='ilość w kg' />
                <Button type='submit'>Odejmij</Button>
            </form>
        </div>
    );
};

export default SubtractIngredientsForm;
