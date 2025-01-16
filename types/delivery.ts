export interface DeliveryProps {
    id: string;
    ingredientId?: string | null;
    quantity: number;
    createdAt: Date;
    updatedAt: Date;
    Ingredient?: {
        id: string;
        name: string;
        quantity: number;
        createdAt: Date;
        updatedAt: Date;
    } | null;
}
