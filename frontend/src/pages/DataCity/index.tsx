import { ReactComponent as Cloud } from '../../assets/cloud.svg';
import { converterTemp, isRainning } from '../utils/utilities';
import { City, Pokemon } from '../../types/type';
import DataPokemon from '../DataPokemon';
import "./styles.css";


type Props = {
  city: City;
  pokemonName?: Pokemon;
  pokemonType: (weather: number, temp: number) => void;
};

const DataCity = ({ city, pokemonName, pokemonType }: Props) => {
  const weather = isRainning(city.weather);
  const temp = converterTemp(city.main.temp);

  pokemonType(weather, temp);

  return (
    <section className='container-data-city'>
      <div className='data-city-temp'><Cloud /><h2>{temp}</h2>o<span>c</span></div>
      <p>{weather === 0 ? "Está Chovendo" : "Não Está Chovendo"}</p>
      {pokemonName && <DataPokemon pokemonName={pokemonName} />}
    </section>
  );
};

export default DataCity;
