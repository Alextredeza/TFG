import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import Cards from '../db/cars.json'

const CarsStore = create(
    persist(
        (set) => ({
            cards: Cards,
            addCar: (car) => set((state) => ({ cards: [...state.cards, car] })),
            removeCar: (id) => set((state) => ({ cards: state.cards.filter((car) => car.id !== id) })),
            setCars: (cars) => set((state) => ({ cards: cars })),
        }),
        {
            name: 'cars-storage',
        }
    )
)

export default CarsStore