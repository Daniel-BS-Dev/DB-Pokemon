import { Weather } from '../../types/type';

export function converterTemp (temperature: number){
   return Math.round(temperature - 273);

}

export function isRainning(name: Weather[]){
  const weather = name.map(response => response.main);
  return weather.indexOf('Rain') && weather.indexOf('Thunderstorm'); 
  
}



