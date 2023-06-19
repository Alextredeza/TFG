import { createContext, useEffect, useState } from 'react'
import { useLocalStorage } from '../hooks/useLocalStorage'
import CarsStore from '../store/Cars'
import axios from 'axios'

const UserLoginData = {
    name: 'Jorge',
    email: 'kamerr_oficial@hotmail.com',
    password: '123456',
}

const Plantilla = [
    {
        id: 1,
        name: "Alexis",
        puesto: "Concesionario Valecia",
        avatar: "https://i0.wp.com/www.diarlu.com/wp-content/uploads/2019/09/cara-hombre-sonriendo.jpg?resize=500%2C500&ssl=1"
    },
    {
        id: 1,
        name: "Carlos",
        puesto: "Concesionario Madrid",
        avatar: "https://i.pinimg.com/originals/cf/c1/d8/cfc1d8b69811d4bacb1377e39d5a74c9.jpg"
    },
    {
        id: 1,
        name: "Brad Pitt",
        puesto: "Concesionario Barcelona",
        avatar: "https://media.revistavanityfair.es/photos/62f3a0b80905daae61390448/1:1/w_3000,h_3000,c_limit/1412406903"
    }
    
]

const AppContext = createContext()

const AppProvaider = ({ children }) => {

    const {
        data: dataLocalStorage,
        saveData: saveLocalStorage,
    } = useLocalStorage('cartStore', [])

    const data = CarsStore((state) => state.cards)
    const setCars = CarsStore((state) => state.setCars)

    useEffect(() => {
        axios.get('http://localhost:3000/api/cars')
            .then((res) => {
                setCars(res.data.data)
            })
            .catch((err) => {
                console.log(err)
            })
    }, [data])


    const [cards, setCards] = useState(data)
    const [filters, setFilters] = useState([])
    const [staff, setStaff] = useState(Plantilla)

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

    const clearCardStore = () => {
        saveLocalStorage([])
    }


    const values = {
        cards,
        setFilters,
        filters,
        filter,
        clearFilter,
        addCardStore,
        removeCardStore,
        dataLocalStorage,
        UserLoginData,
        clearCardStore,
        staff
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