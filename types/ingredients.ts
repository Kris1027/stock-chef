export interface IngredientProps {
    id: string;
    name: string;
    quantity: number;
    createdAt: Date;
    updatedAt: Date;
    deliveries?: {
        id: string;
        ingredientId?: string | null;
        quantity: number;
        createdAt: Date;
        updatedAt: Date;
    }[];
    consumption?: {
        id: string;
        ingredientId?: string | null;
        quantity: number;
        createdAt: Date;
        updatedAt: Date;
    }[];
}
