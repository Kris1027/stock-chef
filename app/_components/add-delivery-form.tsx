'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { addDeliveryAction } from '../_actions/add-delivery-action';
import Combobox from './combobox';
import { IngredientProps } from '@/types/ingredients';

interface AddDeliveryFormProps {
    ingredients: IngredientProps[];
}

const AddDeliveryForm: React.FC<AddDeliveryFormProps> = ({ ingredients }) => {
    return (
        <div>
            <h2 className='text-center text-2xl font-bold'>Nowa dostawa</h2>
            <form action={addDeliveryAction} className='flex gap-4'>
                <Combobox ingredients={ingredients} />
                <Input type='number' name='newQuantity' placeholder='ilość w kg' />
                <Button type='submit'>Dodaj</Button>
            </form>
        </div>
    );
};

export default AddDeliveryForm;
