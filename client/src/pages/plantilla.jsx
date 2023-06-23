import React from "react";
import { useApp } from "../hooks/useApp";
import Layout from "../components/Layouts/Layout";

const plantilla = () => {
  const { staff } = useApp();

  const Card = ({ item }) => (
    <div className="w-full rounded-lg shadow bg-[#363851]">
      
      <div className="flex flex-col items-center pb-10 pt-7">
        <img
          className="w-24 h-24 mb-3 rounded-full shadow-lg"
          src={item.avatar}
          alt="Bonnie image"
        />
        <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
          {item.name}
        </h5>
        <span className="text-sm text-gray-500 dark:text-gray-400">
          {item.puesto}
        </span>
      </div>
    </div>
  );

  return (
    <Layout>
      <div className="container m-auto p-3s">
        <div className="my-5 grid grid-cols-responsive gap-5 px-5">
          {staff.map((item) => (
            <Card item={item} />
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default plantilla;
