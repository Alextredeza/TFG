import { createContext, useState } from 'react'
import { useLocalStorage } from '../hooks/useLocalStorage'

const data = [
    {
        id: 1,
        model: 'Civic Type R',
        brand: 'Honda',
        price:  500000,
        img: 'https://cdn.autobild.es/sites/navi.axelspringer.es/public/styles/1200/public/media/image/2016/09/honda-civic-type-r-ek9.jpg?itok=OIHzMWds',
    },
    {
        id: 2,
        model: 'Titulo de la pagina',
        brand: 'KAMERR',
        price: 50,
        img: 'https://picsum.photos/250/100',
    },
    {
        id: 3,
        model: 'a',
        brand: 'BRUH',
        price: 150000,
        img: 'https://picsum.photos/250/100',
    },
    {
        id: 4,
        model: 'a',
        brand: 'BRUH',
        price: 150000,
        img: 'https://picsum.photos/250/100',
    },
    {
        id: 4,
        model: 'a',
        brand: 'BRUH',
        price: 150000,
        img: 'https://picsum.photos/250/100',
    },
    {
        id: 4,
        model: 'a',
        brand: 'BRUH',
        price: 150000,
        img: 'https://picsum.photos/250/100',
    },
    {
        id: 4,
        model: 'a',
        brand: 'BRUH',
        price: 150000,
        img: 'https://picsum.photos/250/100',
    },
    {
        id: 4,
        model: 'a',
        brand: 'BRUH',
        price: 150000,
        img: 'https://picsum.photos/250/100',
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