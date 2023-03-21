"use strict";

// loading message to be replaced with movie info
let loading = alert("Page loading...");

// listener for loading listeners
document.addEventListener('DOMContentLoaded', function (){
// listener for adding new movie
var movieTitle = document.querySelector('.movieTitle');
movieTitle.addEventListener('input', function (e){
    addMovie();
    });
// listener for adding movie rating
var movieRating = document.querySelector('.movieRating');
movieRating.addEventListener('input', function (e){

});

// pulling data from glitch json file
$.ajax({
    url: 'https://better-glowing-algebra.glitch.me/movies'
}).done(function (data) {
    console.log(data);
    // empty string to contain movie info
    let movieList = "";
    let i;
    // for loop to create movie info for empty string
    for(i = 0; i < data.length; i++) {
        let title = data[i].title;
        let director = data[i].director;
        let rating = data[i].rating;
        let genre = data[i].genre;
        let id = data[i].id;
        // generating movie info for html
        movieList += '<p>' + title + '</p>' +
            '<p>' + director + '</p>' +
            '<p>' + rating + '</p>' +
            '<p>' + genre + '</p>' +
            '<p>' + id + '</p>';
        }
    // sending movie info to div
    $('.movies').html(movieList);
});


// Create a form for adding a new movie that has fields for the movie's title and rating
// When the form is submitted, the page should not reload / refresh, instead, your javascript should make a POST request to /movies with the information the user put into the form
function addMovie() {
    //e.preventDefault(); //<-- why arnt you working
    let newMovie = {
        title: movieTitle.value,
        rating: movieRating.value
    };

// ajax POST request for user adding movie info
    $.ajax({
        type: "POST",
        url: 'https://better-glowing-algebra.glitch.me/movies',
        body: addMovie().send(JSON.stringify(newMovie))
    }).done(function (data){
        movieTitle.value = "";
    })
};
})




