import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { addIngredientAction } from '../_actions/add-ingredient-action';

const AddIngredientForm = () => {
    return (
        <form action={addIngredientAction} className='flex'>
            <Input type='text' name='name' placeholder='nowy składnik' />
            <Button type='submit'>Dodaj</Button>
        </form>
    );
};

export default AddIngredientForm;
