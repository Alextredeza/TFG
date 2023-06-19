import React from 'react'
import Layout from '../../components/Layouts/Layout'

function History() {
  return (
    <Layout>
    <div className='text-white container m-auto p-3'>
      <h1 className='font-bold text-xl my-5'>La historia de nuestro concesionario</h1>
      <p>
        Nosotros somos unos jóvenes emprendedores y apasionados del motor. <br />
        Un dia decidimos darle a la gente un lugar donde poder comprar y vender vehículos Japoneses de una manera fiable y segura. <br />
        Así que nos pusimos manos a la obra y después de mucho esfuerzo lanzamos nuestra aplicación web para todos vosotros. <br />
        Queremos conseguir que cuando alguien piense en vehículos Japoneses de calidad y con seguridad recurra a este lugar, sea para comentar en los foros noticias interesantes, para comprar o para vender algún vehiculo. <br />
        Todo sigue en desarollo pero hemos creado esta página para proporcionar un poco de confianza y que podais conocer un poquito mas este proyecto. <br />
        Esta página se actualizará conforme se hagan grandes cambios en el proyecto, <br />
        un abrazo muy fuerte. <br /> <br />
        Atentamente: El equipo de desarollo.
      </p>
      <img src="/logo2.png" alt="" className='w-32 mt-2' />
    </div>
   </Layout>
  )
}

export default History