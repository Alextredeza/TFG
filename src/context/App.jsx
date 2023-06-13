import { createContext, useState } from 'react'
import { useLocalStorage } from '../hooks/useLocalStorage'

const data = [
    {
        id: 1,
        model: 'Civic Type R',
        brand: 'Honda',
        price:  50000,
        img: 'https://cdn.autobild.es/sites/navi.axelspringer.es/public/styles/1200/public/media/image/2016/09/honda-civic-type-r-ek9.jpg?itok=OIHzMWds',
        popular: true
    },
    {
        id: 2,
        model: 'Skyline GTR R34',
        brand: 'Nissan',
        price: 200000,
        km: '65.000',
        year: '1989',
        cv: '260cv',
        modif: 'Dowpipe, Escape tramo final homologado, Llantas 18 color oro, Vinilo extra, Alerón GTR',
        images: [
            'https://img.remediosdigitales.com/50967d/captura-de-pantalla-2022-08-26-a-las-17.38.32/1366_2000.jpeg',
            'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/image-2-6426a46bb3e23.jpg',
        ],
        img: 'https://img.remediosdigitales.com/50967d/captura-de-pantalla-2022-08-26-a-las-17.38.32/1366_2000.jpeg',
        info: 'El Nissan Skyline GT-R es un automóvil deportivo producido por el fabricante japonés Nissan, lanzado en Japón en 1969 y vendido en gran número en los mercados de exportación bajo la marca Datsun. Es uno de los automóviles más famosos, populares y emblemáticos de Japón, además de ser uno de los más representativos de la marca Nissan.',
        popular: true
    },
    {
        id: 3,
        model: 'Silvia s14',
        brand: 'Nissan',
        price: 100000,
        img: 'https://cochesjaponeses.es/wp-content/uploads/nissansilvias13s14s157.jpg',
        info: 'El Nissan Silvia es un automóvil deportivo producido por el fabricante japonés Nissan desde el año 1964 hasta 2002. El nombre Silvia proviene del nombre de la diosa de la mitología griega Silvia. El Silvia fue lanzado en el año 1964, siendo el primer automóvil deportivo de Nissan. El Silvia fue fabricado en seis generaciones, la primera desde 1964 hasta 1968, la segunda desde 1974 hasta 1979, la tercera desde 1983 hasta 1988, la cuarta desde 1989 hasta 1994, la quinta desde 1999 hasta 2002 y la sexta desde 2013 hasta la actualidad.',
        popular: true
    },
    {
        id: 4,
        model: 'Supra MK4',
        brand: 'Toyota',
        price: 150000,
        img: 'https://cdn.motor1.com/images/mgl/PKZQL/s1/1997-toyota-supra-sold-for-176-000-at-auction.jpg',
        popular: true
    },
    {
        id: 5,
        model: '370z nismo',
        brand: 'Nissan',
        price: 47000,
        img: 'https://img.remediosdigitales.com/5953b0/nissan-370z_nismo-2015-1024-02/1366_2000.jpg',
        popular: true
    },
    {
        id: 6,
        model: 'Civic type R',
        brand: 'Honda',
        price: 45000,
        img: 'https://www.km77.com/images/medium/7/8/7/1/med-ext-limited-edition.347871.jpg',
        popular: true
    },
    {
        id: 7,
        model: 'GTR R35 Nismo',
        brand: 'Nissan',
        price: 150000,
        img: 'https://www.diariomotor.com/imagenes/2013/11/111942_1_5_portada.jpg',
        popular: true
    },
    {
        id: 8,
        model: 'Accord',
        brand: 'Honda',
        price: 38000,
        img: 'https://static.motor.es/fotos-noticias/2020/10/honda-accord-2021-202071809-1602589478_4.jpg',
        popular: true
    },
    {
        id: 9,
        model: 'Celica',
        brand: 'Toyota',
        price: 12000,
        img: 'https://www.cochesyconcesionarios.com/media/cache/1024w/uploads/toyota/celica/7/co/toyota-celica-01-af3d2bc95cbd5960a27c9cfef616b6e14a3a5882.jpeg',
        popular: true
    },
    {
        id: 10,
        model: 'RX-7',
        brand: 'Mazda',
        price: 85000,
        img: 'https://cdn.dealeraccelerate.com/international/1/1069/48336/790x1024/2000-mazda-rx7-fd',
        popular: true
    },
    {
        id: 11,
        model: 'RX-8',
        brand: 'Mazda',
        price: 95000,
        img: 'https://cdn.autobild.es/sites/navi.axelspringer.es/public/media/image/2018/07/mazda-rx-8_5.jpg',
        popular: true
    },
]

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