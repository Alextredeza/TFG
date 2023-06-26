import React from "react";
import Layout from "../components/Layouts/Layout";
import CarStore from "../store/Cars";
import axios from "axios";
import { Form, Formik, Field } from "formik";
import { useNavigate } from "react-router-dom";

const Sell = () => {
  let navigate = useNavigate();
  let addCar = CarStore((state) => state.addCar);
  let [image, setImage] = React.useState(null);
  let [images, setImages] = React.useState(null);

  const Input = ({ title, type = "text", id, placeholder, ...props }) => (
    <div className="flex flex-col">
      <label className="font-bold text-2xl text-white/80 mb-1" htmlFor={id}>
        {title}
      </label>
      <Field
        name={id}
        id={id}
        className="bg-paletter-bluethird p-1 rounded-md text-white focus:outline-none"
        placeholder={placeholder ?? title}
        type={type}
        {...props}
      />
    </div>
  );

  return (
    <Layout>
      <div className="container m-auto p-3">
        <h1 className="text-3xl font-bold text-white text-center my-5">
          Vende tu coche ahora mismo
        </h1>
        <Formik
          initialValues={{
            brand: "",
            model: "",
            year: "",
            km: "",
            price: "",
            info: "",
            img: "",
            images: [],
            color: "",
            doors: "",
            cv: "",
            modif: "",
            combustible: "",
            cambio: "",
          }}
          onSubmit={(values) => {
            let formData = new FormData();
            formData.append("brand", values.brand);
            formData.append("model", values.model);
            formData.append("year", values.year);
            formData.append("km", values.km);
            formData.append("price", values.price);
            formData.append("info", values.info);
            formData.append("img", values.img);
            formData.append("color", values.color);
            formData.append("doors", values.doors);
            formData.append("cv", values.cv);
            formData.append("modif", values.modif);
            formData.append("combustible", values.combustible);
            formData.append("cambio", values.cambio);
            
            // values.images = array of files
            for(let file of values.images) {
              formData.append('images', file)
            }

            axios
              .post("http://localhost:3000/api/cars", formData, {
                headers: {
                  "Content-Type": "multipart/form-data",
                },
              })
              .then((res) => {
                addCar(res.data.data);
                window.location.href = "/#/catalogo";
              })
              .catch((err) => console.log(err));
          }}
        >
          {({ values, setFieldValue }) => {
            return (
              <Form className="flex flex-col flex-wrap">
                <Input title="Marca" id="brand" />
                <Input title="Modelo" id="model" />
                <Input title="Año" id="year" type="number" />
                <Input title="Kilometraje" id="km" type="number" />
                <Input title="Precio" id="price" type="number" />
                <Input title="Color" id="color" />
                <Input title="Cambio" id="cambio" />
                <Input title="Puertas" id="doors" type="number" />
                <Input title="Combustible" id="combustible" />
                <Input title="Potencia" id="cv" type="number" />
                <Input title="Modificaciones" id="modif" />
                <Input title="Descripción" id="info" type="textarea" />
                <div className="flex flex-col">
                  <label
                    className="font-bold text-2xl text-white/80 mb-1"
                    htmlFor="img"
                  >
                    Portada
                  </label>

                  <input
                    title="Portada"
                    id="img"
                    type="file"
                    className="bg-paletter-bluethird p-1 rounded-md text-white focus:outline-none"
                    onChange={(e) => {
                      setFieldValue("img", e.target.files[0]);
                      setImage(URL.createObjectURL(e.target.files[0]));
                    }}
                  />
                </div>
                <div className="flex flex-col">
                  <label
                    className="font-bold text-2xl text-white/80 mb-1"
                    htmlFor="img"
                  >
                    Mas fotos
                  </label>

                  <input
                    title="Portada"
                    id="images"
                    type="file"
                    multiple
                    className="bg-paletter-bluethird p-1 rounded-md text-white focus:outline-none"
                    onChange={(e) => {
                      setFieldValue("images", e.target.files);
                      setImages(URL.createObjectURL(e.target.files));
                    }}
                  />
                </div>
                <button
                  type="submit"
                  className="bg-paletter-bluethird p-2 rounded-md text-white/80 mt-4"
                >
                  Enviar
                </button>
              </Form>
            );
          }}
        </Formik>
        {/* <div className="mt-5">
          <p className="text-white text-xl">Imagenes</p>
          <img src={image} alt="img" className="w-1/4" />
          <div className="flex flex-wrap">
            {images &&
              images.map((img, i) => (
                <img key={i} src={img} alt="img" className="w-1/4" />
              ))}
          </div>
        </div> */}
      </div>
    </Layout>
  );
};

export default Sell;
