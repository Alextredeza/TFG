import React, { useState, useEffect } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { Link } from "react-router-dom";

const CardCatologo = ({ item, index, addCardStore }) => {
  const [price, setPrice] = useState(`${item.price}`);

  useEffect(() => {
    const formatter = new Intl.NumberFormat("es-ES", {
      style: "currency",
      currency: "EUR",
    });
    setPrice(formatter.format(item.price));
  }, []);

  return (
    <div className="bg-[#464f63] rounded-md overflow-hidden  hover:scale-105 transition-all duration-200">
      <div className="overflow-hidden">
        <img className="aspect-video" src={item.img} alt="" />
      </div>
      <div className="p-3 text-white">
        <div>
          <div className="text-base mb-2">
            <Link
              to={`/catalogo/${item.id}`}
              className="font-bold hover:opacity-50 cursor-pointer"
            >
              {item.brand} {item.model}
            </Link>
          </div>
          <div className="flex gap-3 text-sm border border-white/50 rounded-sm w-fit px-2">
            <p>{item?.km} KM</p>
            <div>|</div>
            <p>{item?.year} año</p>
            <div>|</div>
            <p>{item?.cambio}</p>
          </div>
          <button
            onClick={() => {
              addCardStore(item);
              window.location.href = "/carrito";
            }}
            className="bg-[#6c6996] px-2 py-1 rounded-md hover:opacity-50 cursor-pointe w-full mt-2"
          >
            {price}
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <div
      key={index}
      className="p-2 bg-paletter-bluesecond text-white rounded-md w-full flex gap-2 "
    >
      <img
        src={item.img}
        alt="imagen de coche"
        className="rounded-md w-[50%]"
      />
      <div className="flex gap-2 flex-col">
        <Link
          to={`/catalogo/${item.id}`}
          className="font-bold text-xl hover:opacity-50 cursor-pointer"
        >
          {item.model}
        </Link>
        <p className="text-sm">{item.brand}</p>
        <p className="text-red-500 text-2xl font-bold">{price}</p>
        <button
          className="bg-paletter-redlight/50 text-white p-2 w-fit rounded-md"
          onClick={() => {
            addCardStore(item);
            window.location.href = "/carrito";
          }}
        >
          <AiOutlineShoppingCart />
        </button>
      </div>
    </div>
  );
};

export { CardCatologo };
