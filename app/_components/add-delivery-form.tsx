'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { addDeliveryAction } from '../_actions/add-delivery-action';
import Dropdown from './dropdown';
import { IngredientProps } from '@/types/ingredients';

interface AddDeliveryFormProps {
    ingredients: IngredientProps[];
}

const AddDeliveryForm: React.FC<AddDeliveryFormProps> = ({ ingredients }) => {
    return (
        <div>
            <h2 className='text-center text-2xl font-bold'>Nowa dostawa</h2>
            <form action={addDeliveryAction} className='flex gap-4'>
                <Dropdown ingredients={ingredients} />
                <Input type='number' name='newQuantity' placeholder='ilość w kg' />
                <Button type='submit'>Zatwierdź</Button>
            </form>
        </div>
    );
};

export default AddDeliveryForm;
