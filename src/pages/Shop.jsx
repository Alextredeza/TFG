import React from 'react'
import Layout from '../components/Layouts/Layout'
import { useLocalStorage } from '../hooks/useLocalStorage'

function Shop() {

  const {
    data: dataLocalStorage,
    saveData: saveLocalStorage,
  } = useLocalStorage('shop', false)

  return (
    <Layout>
      {dataLocalStorage ? (
        <div>
          <h1>Shop</h1>
          <p>TIENES ALGO</p>
          {dataLocalStorage.model}
        </div>
      ) : (
        <div>
          <h1>Shop</h1>
          <p>NO TIENES NADA AUN</p>
        </div>
      )}
    </Layout>
  )
}

export default Shop