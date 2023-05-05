import { useApp } from '../../hooks/useApp'

const Menu = () => {

  const { filter, clearFilter } = useApp()

  let menu = [
    {
      name: 'Marca',
      submenu: [
        { name: 'Honda', action: () => filter({ type: 'brand', value: 'Honda' }) },
      ],
    },
    { name: 'popular', action: () => filter({ type: 'brand', value: 'Honda' }) },
    { name: 'precios', submenu: [{ name: '€ 500', action: () => filter({ type: 'price', value: 500 }) }] },
    { name: 'limpiar', action: () => clearFilter() },

  ]

  {/* <button
            onClick={() => filter({
              type: 'price',
              value: 500
            })}
          >
            filtrar carros a € 500
          </button> */}

  //   sidebar

  return (
    <div className='bg-paletter-bluethird shadow-lg w-32'>
      <div className='pl-3 mt-4'>
        <p className='text-xl text-white font-bold'>Filtrar</p>
      </div>
      <nav className='flex flex-col items-start pl-3 pt-2'>
        {menu.map((item, index) => {
          return <div key={index} className='text-white'>
            <p onClick={item.action} className={`border-b-[1px] border-paletter-blue/70 ${item.action && 'cursor-pointer hover:opacity-50'}`}>&#10097; {item.name}</p>
            {item.submenu && <div className='flex flex-col items-center'>
              {item.submenu.map((subitem, index) => {
                return <p className='text-white/50 hover:text-white cursor-pointer' key={index} onClick={subitem.action}>{subitem.name}</p>
              })}
            </div>}
          </div>
        })}
      </nav>
    </div>
  )
}
export default Menu;