import { Pokemon } from "../../types/type";
import "./styles.css";

type Props = {
  pokemonName: Pokemon ;
  
};

const DataPokemon = ({ pokemonName }: Props) => {
    const namePokemon = pokemonName.pokemon.map(response => response.pokemon.name);
    const name = namePokemon[Math.ceil(Math.random() * (namePokemon.length - 1 ))] 
    
  return (
    <section className="container-data-pokemon">
      <h2>Pokemon Encontrado</h2>
      <div className="data-pokemon-info">
      <h3><span>TIPO</span>:
        <span> {pokemonName.name}</span>
      </h3>
      <h4><span>NOME</span>:
        <span> {name}</span>
      </h4>
      </div>
    </section>
  );
};

export default DataPokemon;
