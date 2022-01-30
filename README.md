# DB-Pokemon
[![NPM](https://img.shields.io/npm/l/react)](https://github.com/Daniel-BS-Dev/bootcamp-devsuperior/blob/main/LICENSE)

# Sobre o Projeto

DB-Pokemon é uma aplicação Front web desenvolvida com o objetivo de consume duas API, a API  OpenWeatherMap e a API  PokéAPI. Onde o usúario pode digitar o nome de uma cidade 
de qualquer lugar do mundo e o sistema retornará para ele, a temperatura em graus celsius, se está chovendo ou não, o tipo e o nome de um pokemon seguindo as seguintes regras:

- Lugares onde a temperatura for menor (<) que 5ºC, deve-se retornar um pokémon de gelo (ice).
- Lugares onde a temperatura estiver entre (>=) 5ºC e (<) 10ºC, deve-se retornar um pokémon do tipo água (water).
- Lugares onde a temperatura estiver entre (>=) 12ºC e (<) 15ºC, deve-se retornar um pokémon do tipo grama (grass).
- Lugares onde a temperatura estiver entre (>=) 15ºC e (<) 21ºC, deve-se retornar um pokémon do tipo terra (ground).
- Lugares onde a temperatura estiver entre (>=) 23ºC e (<) 27ºC, deve-se retornar um pokémon do tipo inseto (bug).
- Lugares onde a temperatura estiver entre (>=) 27ºC e 33ºC inclusive, deve-se retornar um pokémon do tipo pedra (rock).
- Lugares onde a temperatura for maior que 33ºC, deve-se retornar um pokémon do tipo fogo (fire).

Para qualquer outra temperatura, deve-se retornar um pokémon do tipo normal.
E, no caso em que esteja chovendo na região um pokémon elétrico (electric) deve ser retornado, independente da temperatura.

O pokémon mostrado deve ser aleatório e não deve aparecer duas vezes consecutivas;


# Front end 

![movies](https://user-images.githubusercontent.com/81425846/149604900-9e26c8cb-a06b-4305-bf3e-f0701a84f799.png)
![form](https://user-images.githubusercontent.com/81425846/149605286-38f53b0e-8568-4429-930d-b17f0363d467.png)

   
# Tecnologias Utilizadas 
### Front end
   - HTML/ Css / TypeScript
   - Reactjs
   - Vs Code
   - yarn
   - nodejs
   - Bootstrap
   

### Implantação produção
   - Frontend: Netlify
   
#### Link do projeto: https://dbfilms.netlify.app


# Autor 

Daniel Benedito da Silva

Email: danielbenedito263@gmail.com
