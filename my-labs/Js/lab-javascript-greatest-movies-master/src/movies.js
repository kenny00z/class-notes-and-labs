// import { movies } from './data.js';
// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
// function getAllDirectors(moviesArray) { }
const getAllDirectors = (moviesArray) => {
    const rawList = moviesArray.map((movie) => movie.director);
    // const cleanList = rawList.filter((director, index) => {
    //     rawList.indexOf(director) === index
    // });

    return rawList;
}



// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
// function howManyMovies(moviesArray) {}
const howManyMovies = (moviesArray) => {
    const steven = moviesArray.filter((movieItem) => 
        movieItem.director === "Steven Spielberg");
    const drama = steven.filter((dramaItem) => dramaItem.genre.includes("Drama"));
    return drama.length;
    
 };

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    if (moviesArray.length === 0) {
        return 0;
    }
    
    /* let result = 0;

    moviesArray.forEach(movie => {
        if(movie.score) result += movie.score;       
    });
    
    return parseFloat((result / moviesArray.length).toFixed(2)); */

    /* let result = moviesArray.reduce((previousValue, currentMovie) => {
        if (currentMovie.score) return previousValue + currentMovie.score;
        else return previousValue;
    }, 0) */

    let result = moviesArray.reduce((previousValue, currentMovie) => currentMovie.score ? previousValue + currentMovie.score : previousValue
    , 0)

    return parseFloat((result / moviesArray.length).toFixed(2));
    
}
console.log(scoresAverage(movies));


// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    // if (moviesArray.length === 0) return 0;
    // let result = 0;
    // let dramaMovies = 0;
    // moviesArray.forEach(movie => {
    //     if (movie.score && movie.genre.includes("Drama")) {
    //         result += movie.score
    //         dramaMovies++
    //     }
    // });
    // if (result === 0 && dramaMovies === 0) return 0;
    // else return parseFloat --- acabar ---

    // return parseFloat((result / dramaMovies).toFixed(2));

    const dramaMovies = moviesArray.filter(movie => movie.genre.includes('Drama'));

    const dramaMovies2 = moviesArray.filter(movie => {
        if (movie.genre.includes('Drama')) return movie;
    });

    return scoresAverage(dramaMovies);
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    const year = moviesArray.filter((movie) => movie.year);
    let sortedYears = year.sort((a, b) => a > b ? 1 : -1);
    

    return year;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
// function orderAlphabetically(moviesArray) { }
    const orderAlphabetically = (moviesArray) => {
        return (
            moviesArray
                .map((movie) => movie.title)
                .sort()
                .slice(0, 20)
        );
    };

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {

}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {

}
