import AddIngredientForm from './_components/add-ingredient-form';
import DeliveryList from './_components/delivery-list';
import IngredientList from './_components/ingredient-list';

const HomePage = async () => {
    return (
        <main className='flex flex-col p-4 gap-4 max-w-4xl mx-auto'>
            <AddIngredientForm />
            <IngredientList />
            <DeliveryList />
        </main>
    );
};

export default HomePage;
