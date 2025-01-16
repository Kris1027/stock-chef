import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { addDeliveryAction } from '../_actions/add-delivery-action';
import { IngredientProps } from './ingredient-list';

interface AddDeliveryFormProps {
    ingredients: IngredientProps[];
}

const AddDeliveryForm: React.FC<AddDeliveryFormProps> = ({ ingredients }) => {
    return (
        <form action={addDeliveryAction} className='flex flex-col gap-4'>
            <h2 className='text-center text-2xl font-bold'>Nowa dostawa</h2>
            <select name='ingredient'>
                {ingredients.map((i) => (
                    <option key={i.id} value={i.id}>
                        {i.name}
                    </option>
                ))}
            </select>
            <Input type='number' name='newQuantity' placeholder='ilość w kg' />
            <Button type='submit'>Dodaj</Button>
        </form>
    );
};

export default AddDeliveryForm;
