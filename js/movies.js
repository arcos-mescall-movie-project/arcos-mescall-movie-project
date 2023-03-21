"use strict";





// loading message to be replaced with movie info
let loading = alert("Page loading...");


// just in case
// 'https://glitch.com/edit/#!/better-glowing-algebra?path=db.json%3A1%3A0'
// pulling data from glitch json file
$.ajax({
    url: 'https://better-glowing-algebra.glitch.me/movies'
}).done(function (data) {
    console.log(data);
    let movieList = "";
    let title = data[0].title;
    console.log(title);
    // let directer =;
    // let rating =;
    // let genre =;
    // let id =;
})