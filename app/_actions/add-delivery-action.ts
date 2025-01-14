'use server';

import { prisma } from '@/prisma/prisma';
import { revalidatePath } from 'next/cache';

export async function addDeliveryAction(formData: FormData) {
    const ingredientId = formData.get('ingredient') as string;
    const newQuantity = Number(formData.get('newQuantity'));

    await prisma.ingredient.update({
        where: { id: ingredientId },
        data: {
            quantity: {
                increment: newQuantity,
            },
        },
    });

    await prisma.delivery.create({
        data: {
            newQuantity: newQuantity,
            ingredientId: ingredientId,
        },
    });

    revalidatePath('/');
}
