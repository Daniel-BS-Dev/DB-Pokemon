import { ReactComponent as Lupa } from "../../assets/lupa.svg";
import { BASE_URLC, BASE_URLP } from "../utils/request";
import { City, Pokemon } from "../../types/type";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import DataCity from "../DataCity";
import axios from "axios";
import "./styles.css";

type CityName = {
  name: string;
};

const Search = () => {

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<CityName>();

  const [city, setCity] = useState<City>();
  const [pokemon, setPokemon] = useState<Pokemon>();
  const [pokemonType, setPokemonType] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = (formData: CityName) => {
    setIsLoading(true);
    axios(`${BASE_URLC}${formData.name}&appid=d9ea2020771bdf053f5d9b8d24e0d0a6`)
      .then((response) => {
        setCity(response.data);
        setValue("name", "");
        toast.success("Pesquisa Realizada Com Sucesso");
      })
      .catch(() => toast.error("Cidade Não Encontrada. Verifique o Dado Digitado e Tente Novamente"))
      .finally(() => {
        setIsLoading(false);
      
      });
  };

  const typePokemon = (weather: number, temp: number) => {
    if (temp < 5) {
      weather === 0 ? setPokemonType(13) : setPokemonType(15);
    } else if (temp >= 5 && temp < 10) {
      weather === 0 ? setPokemonType(13) : setPokemonType(11);
    } else if (temp >= 12 && temp < 15) {
      weather === 0 ? setPokemonType(13) : setPokemonType(12);
    } else if (temp >= 15 && temp < 21) {
      weather === 0 ? setPokemonType(13) : setPokemonType(5);
    } else if (temp >= 23 && temp < 27) {
      weather === 0 ? setPokemonType(13) : setPokemonType(7);
    } else if (temp >= 27 && temp < 33) {
      weather === 0 ? setPokemonType(13) : setPokemonType(6);
    } else if (temp > 33) {
      weather === 0 ? setPokemonType(13) : setPokemonType(10);
    } else {
      weather === 0 ? setPokemonType(13) : setPokemonType(1);
    }
  };

  useEffect(() => {
    axios(`${BASE_URLP}${pokemonType}`).then((response) => {
      setPokemon(response.data);
    });
  }, [pokemonType]);

  return (
    <div className="container-search">
        <form onSubmit={handleSubmit(onSubmit)} className="form-search">
          <div className="container-input-button">
            <input
              type="text"
              placeholder="Nome da Cidade"
              className={`form-control ${errors.name ? "is-invalid" : ""}`}
              {...register("name", {
                required: "Campo Deve Ser Preenchido",
              })}
            />
            <button>
              <Lupa />
            </button>
          </div>
          <div className="invalid-feedback d-block login-error input-error">
            {errors.name?.message}
          </div>
        </form>
        {isLoading ? (
          <h1>Carregando ...</h1>
        ) : (
          city && (
            <DataCity
              city={city}
              pokemonName={pokemon}
              pokemonType={typePokemon}
            />
          )
        )}
      </div>
  );
};
export default Search;
