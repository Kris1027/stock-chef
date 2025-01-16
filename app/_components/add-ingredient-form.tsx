import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { addIngredientAction } from '../_actions/add-ingredient-action';

const AddIngredientForm = () => {
    return (
        <div>
            <h2 className='text-center text-2xl font-bold'>Dodaj składnik</h2>
            <form action={addIngredientAction} className='flex gap-4'>
                <Input type='text' name='name' placeholder='nowy składnik' />
                <Button type='submit'>Dodaj</Button>
            </form>
        </div>
    );
};

export default AddIngredientForm;
