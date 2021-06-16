'use strict';

let numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?');

function start(){

    while(numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)){
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?');
    }   
}

start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: true
};


function rememberMyFilms(){
    for (let i = 0 ; i < 2; i++) {
        const a = prompt('Один из последних просмотренных фильмов?', ''),
              b = prompt('На сколько оцените его?', '');
    
        if (a != null && b != null && a != '' && b !='' && a.length < 50 ) {
        personalMovieDB.movies[a] = b;
        console.log('done');
        } else {
            console.log('error');
            i--;
        }
    }
}
rememberMyFilms();

function detectPersanalLevel(){
    if (personalMovieDB.count != null && personalMovieDB.count != '' && personalMovieDB.count < 10) {
        console.log("Просмотрено довольно мало фильмов");
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30 ){
        console.log("Вы классический зритель");
    } else if (personalMovieDB.count > 30) {
        console.log("Вы киноман");
    } else {
        console.log("Произошла ошибка");
    }

}
detectPersanalLevel();

function showMyDB(hidden) {
    if(!hidden) {
       console.log(personalMovieDB); 
    }    
}
showMyDB(personalMovieDB.privet);

function whriteYourGenres() {
    for(let i = 1; i <= 3; i++){
        const genre = prompt(`ваш любимый жанр под номером ${i}`);
        personalMovieDB.genres[i - 1] = genre ;
 //       personalMovieDB.genres[i - 1] = prompt(`ваш любимый жанр под номером ${i}`);  - лучший вариант исполнения !!!
    }

}
whriteYourGenres();
          
