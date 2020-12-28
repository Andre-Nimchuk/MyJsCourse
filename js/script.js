"use strict";
let numberOfFilms = prompt("How much film you can see in this time?", "5");

let a = prompt("Один з останіх переглянутих фільмів?", "logan"),
    b = prompt("На скільки оціните його?", "5"),
    c = prompt("Один з останіх переглянутих фільмів?", "logan"),
    d = prompt("На скільки оціните його?", "5");

let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};


personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);
/* console.log(personalMovieDB.count + " Right");
console.log(personalMovieDB.movies.answer); */
