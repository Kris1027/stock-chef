'use client';
import { Button } from '@/components/ui/button';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Input } from '@/components/ui/input';
import { IngredientProps } from '@/types/ingredients';
import { ChevronsUpDown } from 'lucide-react';
import { useState } from 'react';

interface ComboboxProps {
    ingredients: IngredientProps[];
}

const Combobox: React.FC<ComboboxProps> = ({ ingredients }) => {
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState('');
    const [search, setSearch] = useState('');

    const filteredIngredients = ingredients.filter((ingredient) =>
        ingredient.name.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div className='relative'>
            <input type='hidden' name='ingredient' value={value} />
            <Popover open={open} onOpenChange={setOpen}>
                <PopoverTrigger asChild>
                    <Button
                        variant='outline'
                        role='combobox'
                        aria-expanded={open}
                        className='w-[200px] justify-between'
                    >
                        {value
                            ? ingredients.find((ingredient) => ingredient.id === value)?.name
                            : 'Wybierz składnik...'}
                        <ChevronsUpDown className='opacity-50' />
                    </Button>
                </PopoverTrigger>
                <PopoverContent className='w-[200px] p-2'>
                    <div className='space-y-2'>
                        <Input
                            placeholder='Szukaj...'
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            className='h-8'
                        />
                        <div className='max-h-[300px] overflow-y-auto'>
                            {filteredIngredients.length === 0 ? (
                                <div className='text-sm text-muted-foreground py-2 text-center'>
                                    Nie ma takiego składnika
                                </div>
                            ) : (
                                <div className='space-y-1'>
                                    {filteredIngredients.map((ingredient) => (
                                        <Button
                                            key={ingredient.id}
                                            variant={
                                                value === ingredient.id ? 'secondary' : 'ghost'
                                            }
                                            className='w-full justify-start text-left'
                                            onClick={() => {
                                                setValue(
                                                    value === ingredient.id ? '' : ingredient.id
                                                );
                                                setOpen(false);
                                                setSearch('');
                                            }}
                                        >
                                            {ingredient.name}
                                        </Button>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>
                </PopoverContent>
            </Popover>
        </div>
    );
};

export default Combobox;
