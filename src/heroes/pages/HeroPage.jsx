import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import heroesApi from "../../api/HeroesApi";

export const HeroPage = () => {
  const navigate = useNavigate();

  const onNavigationBack = () => {
    navigate(-1);
  };

  const [getHeroes, setGetHeroes] = useState([]);

  const { heroId } = useParams();

  useEffect(() => {
    obtenerHeroes();
  }, []);

  const obtenerHeroes = async () => {
    try {
      const respuesta = await heroesApi.get(`/superheroes/${heroId}`);
      setGetHeroes(respuesta.data);
    } catch (error) {
      console.log(error);
    }
  };

  const editorialMarvel = "Marvel Comics";
  const editorialDc = "DC  Comics";

  if(getHeroes.editorial === editorialMarvel) {
    console.log("Marvel")
  } else if (getHeroes.editorial === editorialDc) {
    console.log("Dc")
  }


  return (
    <>
    
      <div
        key={getHeroes.id}
        className="w-1/1 sm:w-1/2 grid sm:grid-cols-2 rounded-2xl shadow-2xl bg-gray-900 m-8 animate__animated animate__fadeInLeft"
      >
        <img
          className="w-full h-full rounded-l-2xl"
          src={getHeroes.imagen}
          alt={getHeroes.id}
        />

        <div className="px-6 py-4 ">
          {/* Nombre */}
          <div className="text-xl mb-2 ">
            <span className="font-bold text-yellow-500">Nombre:</span>{" "}
            {getHeroes.nombre}
          </div>

          {/* Editorial */}
          <div className="text-xl mb-2 ">
            <span className="font-bold text-yellow-500">Editorial:</span>{" "}
            {getHeroes.editorial}
          </div>

          {/* Estreno */}
          <div className="text-xl mb-2 ">
            <span className="font-bold text-yellow-500">Estreno:</span>{" "}
            {getHeroes.estreno}
          </div>

          {/* Descripcion */}
          <span className="font-bold text-yellow-500">Descripción:</span>
          <p className="text-gray-400 text-base text-justify mt-4 mb-4">
            {getHeroes.descripcion}
          </p>

          {/* Poderes */}
          <span className="text-xl font-bold text-yellow-500">Poderes:</span>
          <span className="inline-block bg-gray-200 rounded-xl px-3 py-1 text-sm font-semibold text-gray-700 mb-2 ml-4">
            {getHeroes.poderes}
          </span>

          {/* Boton */}
          <button
            onClick={onNavigationBack}
            className="w-full bg-cyan-500 px-8 py-2 mt-8 mb-6 rounded-lg uppercase font-bold hover:bg-cyan-700 "
          >
            Regresar 😿
          </button>
        </div>
      </div>
    </>
  );
};
