// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    
    const allDirectors = moviesArray.map(movie => {
        return movie.director;
    });
    return allDirectors
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    if(moviesArray.length === 0){
        return 0;
    }

    let count = 0;
    let dramaSpielberg = moviesArray.filter(movie => {
        
        if (
            movie.genre.includes('Drama') &&
            movie.director.includes('Spielberg')
        ) {
            return count++;
        } else {
            return false;
        }
    });
    return count;
}


// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    if(moviesArray.length === 0){
        return 0;
    }

    const totalScore = moviesArray.reduce((acc, movie) => {
        if (movie.score) {
            return acc + movie.score;
        } else {
            return acc;
        }
    }, 0);

    const averageScore = totalScore / moviesArray.length;
    return averageScore; // Missing toFixed(2);
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
//    if(!moviesArray.genre.includes('Drama')){
//     return 0;
//    }
    let totalDramaMovies = 0;

   const totalScoreDrama = moviesArray.reduce((acc, movie) => {
        if(movie.score && movie.genre.includes('Drama')){
            totalDramaMovies++;
            return acc + movie.score;
        } else {
            return acc;
        }
   },0);

   const averageDramaScore = totalScoreDrama / totalDramaMovies;
   return averageDramaScore;
  
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
