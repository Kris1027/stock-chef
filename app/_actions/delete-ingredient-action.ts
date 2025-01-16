'use server';

import { prisma } from '@/prisma/prisma';
import { revalidatePath } from 'next/cache';

export async function deleteIngredientAction(id: string) {
    await prisma.$transaction(
        async (prisma) => (
            await prisma.delivery.deleteMany({
                where: { ingredientId: id },
            }),
            await prisma.ingredient.delete({
                where: { id: id },
            })
        )
    );
    revalidatePath('/');
}
