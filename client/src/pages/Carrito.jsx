import React from "react";
import { useApp } from "../hooks/useApp";
import { BiX } from "react-icons/bi";
import Layout from "../components/Layouts/Layout";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { useNavigate } from "react-router-dom";

function Carrito() {
  const navigate = useNavigate();

  const { dataLocalStorage, removeCardStore } = useApp();
  const { saveData: saveDATA } = useLocalStorage("shop", false);

  if (dataLocalStorage.length === 0)
    return (
      <Layout>
        <p className="text-white text-xl p-10">
          No tienes nada en tu carrito de compras
        </p>
      </Layout>
    );
  return (
    <Layout>
      <div className="container m-auto p-3">
        <div className="flex flex-col gap-4 lg:flex-row">
          <div className="bg-[#242335] p-2 rounded-md text-white w-full lg:w-80 h-fit">
            <p className="text-2xl font-bold">Resumen de compra</p>
            <ul className="mt-2">
              {dataLocalStorage.map((item, index) => {
                return (
                  <li
                    key={index}
                    className="flex justify-between text-sm text-white/50"
                  >
                    <p>
                      {item.model} {item.brand}
                    </p>
                    <p>€ {item.price}</p>
                  </li>
                );
              })}
            </ul>
            <div className="border-t mt-4 flex items-center justify-between">
              <p>
                Total:{" "}
                {dataLocalStorage.reduce((acc, item) => acc + item.price, 0)}
              </p>
              <button
                onClick={() => {
                  navigate("/shop");
                  saveDATA(dataLocalStorage);
                }}
                className="bg-gray-700 text-white rounded-md p-1 mt-2"
              >
                Comprar
              </button>
            </div>
          </div>
          <div className="bg-[#242335] p-2 rounded-md text-white w-full lg:w-[calc(100vw_-_20rem)] h-fit">
            {dataLocalStorage.map((item, index) => {
              return (
                <div
                  key={index}
                  className="p-2 rounded-md w-full flex gap-2 relative h-14"
                >
                  <div className="aspect-video">
                    <img
                      src={item.img}
                      alt="imagen de coche"
                      className="rounded-md w-full"
                    />
                  </div>
                  <div className="flex flex-col justify-center">
                    <div>
                      <p className="font-bold text-xl">
                        {item.model} {item.brand}{" "}
                      </p>
                    </div>
                    <div>
                      <p className="text-red-500 text-sm font-bold">
                        € {item.price}
                      </p>
                    </div>
                  </div>
                  <button
                    onClick={() => {
                      removeCardStore(item.uuid);
                    }}
                    className="absolute top-0 right-0"
                  >
                    <BiX className="font-bold text-2xl text-red-500" />
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Carrito;
