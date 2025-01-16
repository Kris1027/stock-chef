'use client';
import { Button } from '@/components/ui/button';
import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
} from '@/components/ui/command';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { cn } from '@/lib/utils';
import { IngredientProps } from '@/types/ingredients';
import { Check, ChevronsUpDown } from 'lucide-react';
import { useState } from 'react';

interface ComboboxProps {
    ingredients: IngredientProps[];
}

const Combobox: React.FC<ComboboxProps> = ({ ingredients }) => {
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState('');

    return (
        <div>
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
                <PopoverContent className='w-[200px] p-0'>
                    <Command shouldFilter={true}>
                        <CommandInput placeholder='Szukaj...' />
                        <CommandList>
                            <CommandEmpty>Nie ma takiego składnika</CommandEmpty>
                            <CommandGroup>
                                {ingredients.map((ingredient) => (
                                    <CommandItem
                                        key={ingredient.id}
                                        value={ingredient.name.toLowerCase()}
                                        onSelect={(currentValue) => {
                                            const selectedIngredient = ingredients.find(
                                                (item) => item.name.toLowerCase() === currentValue
                                            );
                                            if (selectedIngredient) {
                                                setValue(
                                                    selectedIngredient.id === value
                                                        ? ''
                                                        : selectedIngredient.id
                                                );
                                            }
                                            setOpen(false);
                                        }}
                                    >
                                        {ingredient.name}
                                        <Check
                                            className={cn(
                                                'ml-auto',
                                                value === ingredient.id
                                                    ? 'opacity-100'
                                                    : 'opacity-0'
                                            )}
                                        />
                                    </CommandItem>
                                ))}
                            </CommandGroup>
                        </CommandList>
                    </Command>
                </PopoverContent>
            </Popover>
        </div>
    );
};

export default Combobox;
