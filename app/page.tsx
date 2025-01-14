import { prisma } from './lib/prisma';

const HomePage = async () => {
    const ingredient = await prisma.ingredient.findMany();
    return (
        <div>
            <h1>Home Page</h1>
            <ul>
                {ingredient.map((i) => (
                    <li key={i.id}>{i.name}</li>
                ))}
            </ul>
        </div>
    );
};

export default HomePage;
