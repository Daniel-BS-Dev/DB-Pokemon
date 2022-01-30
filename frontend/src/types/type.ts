export type Weather = {
  id: number;
  main: string;
  description: string;
};

type Main = {
  temp: number;
  pressure: number;
  humidity: number;

};

export type City = {
  weather: Weather[];
  main: Main;

};

type TestPokemon = [
  {
    pokemon: {name: string, url: string},
   
  }
]

export type Pokemon = {
  name: string,
  pokemon: TestPokemon
}


