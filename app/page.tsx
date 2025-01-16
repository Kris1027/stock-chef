import { prisma } from '@/prisma/prisma';
import AddIngredientForm from './_components/add-ingredient-form';
import DeliveryList from './_components/delivery-list';
import IngredientList from './_components/ingredient-list';
import AddDeliveryForm from './_components/add-delivery-form';
import SubtractIngredientsForm from './_components/subtract-ingredients-form';

const HomePage = async () => {
    const ingredients = await prisma.ingredient.findMany({
        include: {
            deliveries: true,
        },
    });
    const delivery = await prisma.delivery.findMany({
        include: {
            Ingredient: true,
        },
    });

    return (
        <main className='flex flex-col p-4 gap-4 max-w-4xl mx-auto'>
            <AddIngredientForm />
            <IngredientList ingredients={ingredients} />
            <DeliveryList delivery={delivery} />
            <AddDeliveryForm ingredients={ingredients} />
            <SubtractIngredientsForm ingredients={ingredients} />
        </main>
    );
};

export default HomePage;
