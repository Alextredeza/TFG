import { useApp } from '../../hooks/useApp'

const Menu = () => {

  const { filter, clearFilter, setFilters, cards } = useApp()

  const handleSubmit = (e) => {

    e.preventDefault()

    let min = e.target.min.value
    let max = e.target.max.value

    // if min and don't max
    if (min && !max) {
      setFilters(cards.filter(card => card.price >= min))
    }

    // if max and don't min
    if (!min && max) {
      setFilters(cards.filter(card => card.price <= max))
    }

    // if min and max
    if (min && max) {
      setFilters(cards.filter(card => card.price >= min && card.price <= max))
    }
  }

  let menu = [
    {
      name: 'Marca',
      submenu: [
        { name: 'Honda', action: () => filter({ type: 'brand', value: 'Honda' },) },
        { name: 'Nissan', action: () => filter({ type: 'brand', value: 'Nissan' },) },
        { name: 'Toyota', action: () => filter({ type: 'brand', value: 'Toyota' },) },
        { name: 'Mazda', action: () => filter({ type: 'brand', value: 'Mazda' },) },
        { name: 'Mitsubishi', action: () => filter({ type: 'brand', value: 'Mitsubishi' },) },
        { name: 'Lexus', action: () => filter({ type: 'brand', value: 'Lexus' },) },
      ],
    },
    { name: 'Popular', action: () => filter({ type: 'brand', value: 'Nissan' }) },
    {
      name: 'precios',
      submenu: [
        {
          compontent: <form onSubmit={handleSubmit}>
            <label htmlFor="min">Minimo</label>
            <input className='bg-paletter-bluesecond w-[90%] rounded-sm my-1' placeholder='50000' type="number" name="min" id="min" />
            <label htmlFor="max">Maximo</label>
            <input className='bg-paletter-bluesecond w-[90%] rounded-sm' placeholder='500000' type="number" name="max" id="max" />
            <button className='bg-paletter-redlight mt-1 py-1 px-2 rounded-sm' type="submit">filtrar</button>
          </form>
        }
      ]
    },
    { name: 'limpiar filtro', action: () => clearFilter() },

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
                if (subitem.compontent) return subitem.compontent
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