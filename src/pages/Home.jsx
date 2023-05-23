import React from 'react'
import Layout from '../components/Layouts/Layout'
import Card from '../components/Card'

import { useApp } from '../hooks/useApp'
import { Link } from 'react-router-dom'

const Home = () => {

  const { cards } = useApp()
  const [popular, setPopular] = React.useState([])

  React.useEffect(() => {
    const popular = cards.filter(item => item.popular == true)
    setPopular(popular)
  }, [popular])

  return (
    <Layout>
      <div className='mb-5'>
        <div className='bg-[url("https://wallpapercave.com/wp/TpayTNx.jpg")] h-72 bg-center bg-no-repeat bg-cover bg-blend-overlay bg-paletter-blue/95 flex flex-col justify-center items-center'>
          <h1 className='text-4xl font-bold text-paletter-white'>Estrena tu auto ahora mismo</h1>
          <Link
            className='border border-paletter-redlight/50 px-3 py-1 rounded-md hover:bg-paletter-redlight/50 hover:text-paletter-redlight/900 transition duration-300 ease-in-out cursor-pointer text-paletter-white text-2xl mt-3'
            to='/catalogo'>Nuestro Catalogo</Link>
        </div>
        <div class='flex justify-around mt-5'>
          <h1
            className='text-paletter-white text-4xl font-bold'
          >Productos destacados</h1>
        </div>

        <div class='grid grid-cols-responsive container m-auto mt-10 p-3'>
          {popular.map((item, index) => <Card key={index} item={item} />)}
        </div>
      </div>
    </Layout>
  )

}

export default Home