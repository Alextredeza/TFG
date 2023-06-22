import React from "react";
import Layout from "../components/Layouts/Layout";
import Menu from "../components/Layouts/Menu";

import { useApp } from "../hooks/useApp";
import { CardCatologo } from "../components/CardCatologo";

function Catalogo() {
  const { cards, filters, addCardStore } = useApp();
  const [search, setSearch] = React.useState("");

  const handlerChange = (e) => {
    setSearch(e.target.value);
  };

  return (
    <Layout>
      <div className="flex h-[calc(100vh_-_4rem)] ">
        <Menu />
        <div className="bg-paletter-blue w-full overflow-auto ">
          <div className="flex justify-center my-2 ">
            <div className="w-1/2">
              <input
                type="text"
                placeholder="Buscar"
                className="w-full h-10 px-3 text-base placeholder-gray-600 border rounded-lg focus:shadow-outline"
                onChange={handlerChange}
              />
            </div>
          </div>

          <div className="grid grid-cols-responsive p-3 gap-5">
            {/* Si search esta vacio y no hay filtro, mostrar las tarjetas */}
            {search === "" &&
              filters.length === 0 &&
              cards.map((item, index) => {
                return (
                  <CardCatologo
                    index={index}
                    item={item}
                    addCardStore={addCardStore}
                    key={index}
                  />
                );
              })}

            {/* Si search esta vacio y hay filtro, mostrar las tarjetas */}
            {search === "" &&
              filters.length > 0 &&
              filters.map((item, index) => {
                return (
                  <CardCatologo
                    index={index}
                    item={item}
                    addCardStore={addCardStore}
                    key={index}
                  />
                );
              })}

            {/* Si search no esta vacio y no hay filtro, mostrar las tarjetas del search */}
            {search !== "" &&
              filters.length === 0 &&
              cards.map((item, index) => {
                if (item.model.toLowerCase().includes(search.toLowerCase())) {
                  return (
                    <CardCatologo
                      index={index}
                      item={item}
                      addCardStore={addCardStore}
                      key={index}
                    />
                  );
                }
              })}

            {/* Si search no seta vacio y hay filtro, mostrara el search */}
            {search !== "" &&
              filters.length > 0 &&
              filters.map((item, index) => {
                if (item.model.toLowerCase().includes(search.toLowerCase())) {
                  return (
                    <CardCatologo
                      index={index}
                      item={item}
                      addCardStore={addCardStore}
                      key={index}
                    />
                  );
                }
              })}
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Catalogo;
