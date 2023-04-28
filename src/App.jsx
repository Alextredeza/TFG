import Layout from "./components/Layouts/Layout"
import Card from "./components/Card"

function App() {

  const data = [
    {
      model: 'Titulo de la pagina',
      brand: 'Marca',
      price: 1000,
      img: 'https://picsum.photos/250/100',
      bg: 'bg-gray-100'
    },
    {
      model: 'Titulo de la pagina',
      brand: 'Marca',
      price: 1000,
      img: 'https://picsum.photos/250/100',
      bg: 'bg-gray-100'
    },
    {
      model: 'Titulo de la pagina',
      brand: 'Marca',
      price: 1000,
      img: 'https://picsum.photos/250/100',
      bg: 'bg-gray-100'
    },
  ]
  
  const array = new Array(10).fill(data)

  return (
    <Layout>
      <div class='flex justify-around mt-5'>
        <h1>Productos destacados</h1>
        <button>Nuestro Catalogo</button>
      </div>

      <div class='p-3'>
        {data.map((item, index) => <Card key={index} item={item} /> )}
      </div>


    </Layout>
  )
}

export default App
