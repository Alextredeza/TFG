import React from 'react'
import Layout from '../components/Layouts/Layout'
import CarStore from '../store/Cars'

const Sell = () => {

    let addCar = CarStore((state) => state.addCar)
    let [image, setImage] = React.useState(null)
    let [images, setImages] = React.useState(null)

    const LabelWrape = ({ title, type = 'text', id, placeholder, }) =>
        <div className='flex flex-col'>
            <label className='font-bold text-2xl text-white/80 mb-1' htmlFor={id}>{title}</label>
            <input name={id} id={id} className='bg-paletter-bluethird p-1 rounded-md text-white' placeholder={placeholder ?? title} type={type} />
        </div>

    const handlerSubmit = (e) => {
        e.preventDefault()

        let car = {
            brand: e.target.brand.value,
            model: e.target.model.value,
            year: e.target.year.value,
            km: e.target.mileage.value,
            price: e.target.price.value,
            description: e.target.description.value,
        }

        let img = e.target.img.files[0] ?? null
        let imgs = e.target.images.files

        
    }

    return (
        <Layout>
            <div className='container m-auto p-3'>
                <h1 className='text-3xl font-bold text-white text-center my-5'>Vende tu coche ahora mismo</h1>
                <div>
                    <form onSubmit={handlerSubmit} encType="multipart/form-data">
                        <LabelWrape title='Marca' id='brand' />
                        <LabelWrape title='Modelo' id='model' />
                        <LabelWrape title='Año' id='year' type='number' />
                        <LabelWrape title='Kilometraje' id='mileage' type='number' />
                        <LabelWrape title='Precio' id='price' type='number' />
                        <LabelWrape title='Descripción' id='description' type='textarea' />
                        <div className='flex flex-col'>
                            <label className='font-bold text-2xl text-white/80 mb-1' htmlFor='img'>Portada</label>
                            <input name='img' id='img' className='bg-paletter-bluethird p-1 rounded-md text-white' type='file' accept='.jpg, .jpeg, .png'
                                onChange={(e) => {
                                    setImage(URL.createObjectURL(e.target.files[0]))
                                }}
                            />
                        </div>
                        <div className='flex flex-col'>
                            <label className='font-bold text-2xl text-white/80 mb-1' htmlFor='images'>Imagenes</label>
                            <input name='images' id='images' className='bg-paletter-bluethird p-1 rounded-md text-white' type='file' multiple accept='.jpg, .jpeg, .png'
                                onChange={(e) => {
                                    let imgs = []
                                    for (let i = 0; i < e.target.files.length; i++) {
                                        imgs.push(URL.createObjectURL(e.target.files[i]))
                                    }
                                    setImages(imgs)
                                }}
                            />
                        </div>
                        <button className='bg-paletter-bluethird p-2 rounded-md text-white mt-5' type='submit'>Vender</button>
                    </form>
                </div>
                <div className='mt-5'>
                    <p className='text-white text-xl'>Imagenes</p>
                    <img src={image} alt='img' className='w-1/4' />
                    <div className='flex flex-wrap'>
                        {images && images.map((img, i) => <img key={i} src={img} alt='img' className='w-1/4' />)}
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default Sell