import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Card = ({ item }) => {
  const [price, setPrice] = useState(`${item.price}`);

  useEffect(() => {
    const formatter = new Intl.NumberFormat("es-ES", {
      style: "currency",
      currency: "EUR",
    });
    setPrice(formatter.format(item.price));
  }, []);

  return (
    <Link to={`/catalogo/${item.id}`} className="bg-[#464f63] rounded-md overflow-hidden hover:scale-105 transition-all duration-200">
      <div className="overflow-hidden">
        <img className="aspect-video" src={item.img} alt="" />
      </div>
      <div className="p-3 text-white">
        <div>
          <p className="font-bold text-base">
            {item.brand} {item.model}
          </p>
          <button
            className="bg-[#6c6996] px-2 py-1 rounded-md hover:opacity-50 cursor-pointe w-full mt-2"
          >{price}</button>
        </div>
      </div>
    </Link>
  );

  return (
    <Link
      to={`/catalogo/${item.id}`}
      className="bg-paletter-bluesecond px-4 py-2 rounded-md m-2 hover:opacity-50 cursor-pointer text-paletter-white/80"
    >
      <img className="w-full rounded-md" src={item.img} alt="" />
      <p className="font-bold text-xl">{item.model}</p>
      <p className="font-bold">{item.brand}</p>
      <p className="font-bold text-xl text-paletter-redlight">{price}</p>
    </Link>
  );
};

export default Card;
