import { createContext, useState } from 'react'

const data = [
    {
        id: 1,
        model: 'Titulo de la pagina',
        brand: 'TZURU',
        price: 2000,
        img: 'https://picsum.photos/250/100',
        bg: 'bg-gray-100'
    },
    {
        id: 2,
        model: 'Titulo de la pagina',
        brand: 'KAMERR',
        price: 5000,
        img: 'https://picsum.photos/250/100',
        bg: 'bg-gray-100'
    },
    {
        id: 3,
        model: 'a',
        brand: 'BRUH',
        price: 500,
        img: 'https://picsum.photos/250/100',
        bg: 'bg-gray-100'
    },
]

const AppContext = createContext()

const AppProvaider = ({ children }) => {

    const [cards, setCards] = useState(data)
    const [filters, setFilters] = useState([])
    const [cardStore, setCardStore] = useState([])

    const filter = (filter) => {
        // filter = {type: 'brand', value: 'TZURU'} || {type: 'price', value: 1000}
        const newCards = cards.filter(card => card[filter.type] == filter.value)
        setFilters(newCards)
    }

    const clearFilter = () => {
        setFilters([])
    }

    const addCardStore = (card) => {
        setCardStore([...cardStore, card])
    }

    const removeCardStore = (id) => {
        const newCardStore = cardStore.filter(card => card.id !== id)
        setCardStore(newCardStore)
    }

    const values = {
        cards,
        filters,
        filter,
        clearFilter,
        addCardStore,
        removeCardStore,
    }

    return (
        <AppContext.Provider value={values}>
            {children}
        </AppContext.Provider>
    )
}

export {
    AppProvaider,
    AppContext
}