import React from 'react'
import Layout from '../components/Layouts/Layout'
import Card from '../components/Card'

import { useApp } from '../hooks/useApp'
import { useLocalStorage } from '../hooks/useLocalStorage'
import { Link } from 'react-router-dom'

const Home = () => {

  const { cards } = useApp()

  const { data, saveData } = useLocalStorage('cardStor', [])

  React.useEffect(() => {
    saveData(cards)
  }, [cards])

  return (
    <Layout>
      <div class='flex justify-around mt-5'>
        <h1>Productos destacados</h1>
        <Link to='/catalogo'>Nuestro Catalogo</Link>
      </div>

      <div class='p-3'>
        {cards.map((item, index) => <Card key={index} item={item} />)}
      </div>


    </Layout>
  )

}

export default Home