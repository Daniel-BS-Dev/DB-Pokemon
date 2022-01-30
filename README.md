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


# Layout Web

![Sem título](https://user-images.githubusercontent.com/81425846/151712178-b66d1592-39da-49e8-a471-c64815655f1c.png)
![erro](https://user-images.githubusercontent.com/81425846/151712758-2fb455c2-7d29-4764-ae68-96c227857aae.png)
![seccess](https://user-images.githubusercontent.com/81425846/151712188-51cfa320-9a55-4055-8c43-67860c631f26.png)


# Passo a Passo de como roda a aplicação
### Primeira opção
Esta página está hospedada na Netlify como o link de acesso a API OpenWeatherMap é HTTP causa um erro Mixed Content. Fazendo algumas pesquisas para solucionar o problema eu encontrei este site. Link: https://experienceleague.adobe.com/docs/target/using/experiences/vec/troubleshoot-composer/mixed-content.html?lang=en .
Ao ler e desativar o modo de segura voltei a rodar a aplicação novamente e funciono como esperado
Link da aplicação na Netlify: https://db-pokemon.netlify.app

### Segunda opção
  Instale o yarn na versão 1.22.5 e o nodejs na versão 16.13.1. Faça um clone deste projeto usando o comando git clone. Veja esta página de como fazer um clone de um projeto no   git Link: https://docs.github.com/pt/repositories/creating-and-managing-repositories/cloning-a-repository. dentro da pasta frontend rode o projeto com o comando 'yarn start' usando o prompt de comando da sua máquina ou o terminal do git bash
   
# Tecnologias Utilizadas 
### Front end
   - HTML/ Css / TypeScript
   - Reactjs
   - Vs Code
   - yarn
   - nodejs
   - Bootstrap
   - React-hook-form
   - React-Toastify
   

### Implantação produção
   - Frontend: Netlify


# Autor 

Daniel Benedito da Silva

Email: danielbenedito263@gmail.com
