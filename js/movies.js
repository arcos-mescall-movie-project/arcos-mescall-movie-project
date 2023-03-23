"use strict";

// // loading message to be replaced with movie info
let loading = alert("Page loading...");

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
    for (i = 0; i < 6; i++) {
        let title = data[i].title;
        let rating = data[i].rating;
        let genre = data[i].genre;
        // generating movie info for html
        if(genre === undefined){
            genre = "Family";
        }
        movieList += '<div class="cards">' +
            '<h3 class="ps-2">' + "Title: " + title + '</h3>' +
            '<p class="ps-1">' + "Rating: " + rating + '</p>' +
            '<p class="ps-1">' + "Genre: " + genre + '</p>' +
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
        })
        console.log("is this working?");
        console.log(data);
    })

// dropdown for selecting your movie to edit, delete and select all movies
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
        let rating = data[i].rating;
        let id = data[i].id;
        // generating movie info for html
        movieList += '<div class="border border-danger cards">' +
            `<option value=${id}> <h3>` + "Title: " + title + ", " + '</h3>' +
            " " +
            '<p>' + "Rating: " + rating + '</p></option>' +
            '</div>';
    }
    $('.movieSelection').html(movieList);
    $('.movieDeleteSelect').html(movieList);
    $('.movieFilterTitle').html(movieList);
})

// user input for editing movie from selector
    let movieSelect = document.querySelector('.movieSelection');
    let movieEdit = document.querySelector('.editMovie');
    let movieEditTwo = document.querySelector('.editMovieTwo')
    let buttonControlTwo = document.querySelector('.btnTwo');

     buttonControlTwo.addEventListener('click', function (e){
         e.preventDefault();
        // calling data so that we may change it
        $.ajax({
            type: "PATCH",
            url: 'https://better-glowing-algebra.glitch.me/movies/'+movieSelect.value,
            data: {title: movieEdit.value,
                    rating: movieEditTwo.value
                    }
        })
     })

// ajax request for deleting a movie
    let movieDelete = document.querySelector('.movieDeleteSelect');
    let buttonControlThree = document.querySelector('.btnThree');
    buttonControlThree.addEventListener('click', function (e){
        e.preventDefault();
    $.ajax({
        type: "DELETE",
        url: 'https://better-glowing-algebra.glitch.me/movies/' +movieDelete.value
    });
    });

    //this is for the 'all movies' dropdown in html and is attached at the bottom of edit movies
    let movieFilterTitle = document.querySelector('.movieFilterTitle');

});






