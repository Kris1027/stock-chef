'use server';

import { prisma } from '@/prisma/prisma';
import { revalidatePath } from 'next/cache';

export async function addIngredientAction(formData: FormData) {
    await prisma.ingredient.create({
        data: {
            name: formData.get('name') as string,
        },
    });
    revalidatePath('/');
}
