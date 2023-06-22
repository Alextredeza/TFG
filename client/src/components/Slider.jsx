import React from 'react'

const Slider = ({ images, className = 'h-[350px]' }) => {

    const [current, setCurrent] = React.useState(0) // 10 imagenes, 0-9
    const [imgs, setImgs] = React.useState(images)

    const next = () => {
        const isLastSlide = current === imgs.length - 1 // 9 === 9
        const index = isLastSlide ? 0 : current + 1 // 0 : 9 + 1
        setCurrent(index)
    }
    const prev = () => {
        const isFirstSlide = current === 0
        const index = isFirstSlide ? imgs.length - 1 : current - 1
        setCurrent(index)
    }

    return (
        <div className={className + ' relative group'}>
            <div
                style={{ backgroundImage: `url(${imgs[current]})` }}
                className='w-full h-full rounded-xl bg-center bg-cover duration-900'
            >
                {imgs.length > 1 && (
                    <button
                        onClick={prev}
                        className='hidden group-hover:block text-white text-2xl  absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 bg-black/20 p-2 cursor-pointer'
                    >
                        {"<"}
                    </button>

                )}
                {imgs.length > 1 && (
                    <button
                        onClick={next}
                        className='hidden group-hover:block text-white text-2xl  absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 bg-black/20 p-2 cursor-pointer'
                    >
                        {">"}
                    </button>
                )}
            </div>
        </div>
    )
}

export default Slider