'use client';

import { Button } from '@/components/ui/button';
import { deleteIngredientAction } from '../_actions/delete-ingredient-action';

const DeleteButton = ({ id }: { id: string }) => {
    return (
        <Button onClick={() => deleteIngredientAction(id)} size='sm'>
            Usuń
        </Button>
    );
};

export default DeleteButton;
