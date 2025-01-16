import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { addIngredientAction } from '../_actions/add-ingredient-action';

const AddIngredientForm = () => {
    return (
        <form action={addIngredientAction} className='flex flex-col gap-4'>
            <h2 className='text-center text-2xl font-bold'>Dodaj składnik</h2>
            <Input type='text' name='name' placeholder='nowy składnik' />
            <Button type='submit'>Dodaj</Button>
        </form>
    );
};

export default AddIngredientForm;
