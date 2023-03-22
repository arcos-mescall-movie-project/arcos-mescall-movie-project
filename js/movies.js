"use strict";

// // loading message to be replaced with movie info
// let loading = alert("Page loading...");

// listener for loading listeners
document.addEventListener('DOMContentLoaded', function (){

// pulling data from glitch json file
$.ajax({
    url: 'https://better-glowing-algebra.glitch.me/movies'
}).done(function (data) {
    console.log(data);
    // empty string to contain movie info
    let movieList = "";
    let i;
    // for loop to create movie info for empty string
    for (i = 0; i < data.length; i++) {
        let title = data[i].title;
        // let director = data[i].director;
        let rating = data[i].rating;
        // let genre = data[i].genre;
        // let id = data[i].id;
        // generating movie info for html
        movieList += '<div class="border border-danger cards">' +
            '<h3>' + title + '</h3>' +
            // '<p>' + director + '</p>' +
            '<p>' + rating + '</p>' +
            // '<p>' + genre + '</p>' +
            // '<p>' + id + '</p>' +
            '</div>';
    }
    $('.movies').html(movieList);
})

    let movieRating = document.querySelector('.movieRating');
    let movieTitle = document.querySelector('.movieTitle');
    let buttonControlOne = document.querySelector('.btnOne');
    buttonControlOne.addEventListener('click', function (e){
        e.preventDefault();
        function addMovie() {
            let newMovie = {
                title: movieTitle.value,
                rating: movieRating.value
            };
            console.log(newMovie);
            return newMovie;
        }
// ajax POST request for user adding movie info
        $.ajax({
            type: "POST",
            url: 'https://better-glowing-algebra.glitch.me/movies/',
            data: addMovie()
        }).done(function () {
            // document.getElementsByClassName('.movies').innerHTML = addMovie();
        })
        console.log("is this working?");
        console.log(data);
    })

//allowing users to edit existing movies
//     Give users the option to edit an existing movie
//     A form should be pre-populated with the selected movie's details
//     Like creating a movie, this should not involve any page reloads, instead your javascript code should make an ajax request when the form is submitted.

// dropdown for selecting your movie to edit
$.ajax({
    url: 'https://better-glowing-algebra.glitch.me/movies'
}).done(function (data) {
    console.log(data);
    // empty string to contain movie info
    let movieList = "";
    let i;
    // for loop to create movie info for empty string
    for (i = 0; i < data.length; i++) {
        let title = data[i].title;
        // let director = data[i].director;
        let rating = data[i].rating;
        // let genre = data[i].genre;
        // let id = data[i].id;
        // generating movie info for html
        movieList += '<div class="border border-danger cards">' +
            '<option><h3>' + title + '</h3>' +
            " " +
            '<p>' + rating + '</p></option>' +
            '</div>';
    }
    $('.movieSelection').html(movieList);
})

// user input for editing movie from selector
    let movieEdit = document.querySelector('.editMovie');
    let buttonControlTwo = document.querySelector('.btnTwo');

    buttonControlTwo.addEventListener('click', function (){
        // calling data so that we may change it
        $.ajax({
            type: "PATCH",
            url: 'https://better-glowing-algebra.glitch.me/movies/'
        }).done(function (data) {
            let idSelect = data[i].id;
            for(let i = 0; i < data.length; i++) {
                if (data.id === idSelect) {
                    data.title = movieEdit.value;
                }
                ('movies').html(newMovieList);
            }
        })
    })

});




