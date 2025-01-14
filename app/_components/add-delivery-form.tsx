import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { addDeliveryAction } from '../_actions/add-delivery-action';

const AddDeliveryForm = ({ ingredients }) => {
    return (
        <form action={addDeliveryAction} className='flex'>
            <select name='ingredient'>
                {ingredients.map((i) => (
                    <option key={i.id} value={i.id}>
                        {i.name}
                    </option>
                ))}
            </select>
            <Input type='number' name='newQuantity' placeholder='ilość w gramach' />
            <Button type='submit'>Dodaj</Button>
        </form>
    );
};

export default AddDeliveryForm;
