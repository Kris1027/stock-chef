'use client';
import { IngredientProps } from '@/types/ingredients';
import { useState, useRef, useEffect } from 'react';

interface DropdownProps {
    ingredients: IngredientProps[];
}

const Dropdown: React.FC<DropdownProps> = ({ ingredients }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [value, setValue] = useState('');
    const [search, setSearch] = useState('');
    const dropdownRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const filteredIngredients = ingredients.filter((ingredient) =>
        ingredient.name.toLowerCase().includes(search.toLowerCase())
    );

    const selectedIngredient = ingredients.find((i) => i.id === value);

    return (
        <div className='relative w-[300px]' ref={dropdownRef}>
            <input type='hidden' name='ingredient' value={value} />

            <button
                type='button'
                onClick={() => setIsOpen(!isOpen)}
                className='w-full px-3 py-2 text-left border rounded-md bg-white hover:bg-gray-50'
            >
                {selectedIngredient?.name || 'Wybierz składnik...'}
            </button>

            {isOpen && (
                <div className='absolute w-full mt-1 bg-white border rounded-md shadow-lg z-10'>
                    <input
                        type='text'
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        placeholder='Szukaj...'
                        className='w-full p-2 border-b'
                        autoFocus
                    />
                    <div className='max-h-[200px] overflow-y-auto'>
                        {filteredIngredients.length === 0 ? (
                            <div className='p-2 text-center text-gray-500'>
                                Nie znaleziono składników
                            </div>
                        ) : (
                            <div className='py-1'>
                                {filteredIngredients.map((ingredient) => (
                                    <button
                                        key={ingredient.id}
                                        type='button'
                                        onClick={() => {
                                            setValue(value === ingredient.id ? '' : ingredient.id);
                                            setIsOpen(false);
                                            setSearch('');
                                        }}
                                        className={`w-full px-3 py-2 text-left hover:bg-gray-100 ${
                                            value === ingredient.id ? 'bg-gray-100' : ''
                                        }`}
                                    >
                                        {ingredient.name}
                                    </button>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
};

export default Dropdown;
