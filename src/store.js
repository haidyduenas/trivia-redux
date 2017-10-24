import createStore from "redux-zero";

let items = [
    { 
        question: "La pelicula más taquillera de Pixar", 
        options : [ "El Rey Leon", "Los Increibles", "Frozen"] ,
        image:"assets/img/fondo.png",
        answer : "Frozen"
    },
    { 
        question: "Pelicula animada más premiada?", 
        options:  ["Buscando a Nemo", "El rey Leon", "UP"] ,
        image :"assets/img/sou.png",
        answer : "El rey Leon"
    },
    { 
        question: "La pelicula ganadora del Oscar a la mejor animacion 2004?", 
        options:["Enredados", "Los Increibles", "Toy Story"], 
        image:"assets/img/in.png",
        answer : "Los Increibles"
    },
    { 
        question: "Largometraje con mas nominaciones al Oscar?", 
        options : ["Wall-E", "Monster Inc","Dory"],
        image:"assets/img/pumba.png",
        answer : "Wall-E"
    },
    { 
        question: "Record al debút más grande para un pelicula animada?", 
        options :["Bichos", "Bolt","Ratatouille"],
        image :"assets/img/fro.png",     
        answer : "Ratatouille"
    }
 ];

 const initialState = {
    Items : Items,
    answers : [],
    index : 0,
    complete : false,
    compare:false,
    score: 0
};

const store = createStore(initialState);

export default store;