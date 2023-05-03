import { createContext, useState } from 'react'
import { useLocalStorage } from '../hooks/useLocalStorage'

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

    const {
        data: dataLocalStorage,
        saveData: saveLocalStorage,
    } = useLocalStorage('cartStore', [])

    const [cards, setCards] = useState(data)
    const [filters, setFilters] = useState([])

    const filter = (filter) => {
        const newCards = cards.filter(card => card[filter.type] == filter.value)
        setFilters(newCards)
    }

    const clearFilter = () => {
        setFilters([])
    }

    const addCardStore = (card) => {
        saveLocalStorage([...dataLocalStorage, {...card, uuid: Date.now() }])
    }

    const removeCardStore = (id) => {
        const newCardStore = dataLocalStorage.filter(card => card.uuid !== id)
        saveLocalStorage(newCardStore)
    }

    const values = {
        cards,
        filters,
        filter,
        clearFilter,
        addCardStore,
        removeCardStore,
        dataLocalStorage,
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