'use server';

import { prisma } from '@/prisma/prisma';
import { revalidatePath } from 'next/cache';

export async function SubtractIngredientsAction(formData: FormData) {
    const ingredientId = formData.get('ingredient') as string;
    const newQuantity = Number(formData.get('newQuantity'));

    await prisma.ingredient.update({
        where: { id: ingredientId },
        data: {
            quantity: {
                decrement: newQuantity,
            },
        },
    });

    await prisma.consumption.create({
        data: {
            quantity: newQuantity,
            ingredientId: ingredientId,
        },
    });

    revalidatePath('/');
}
