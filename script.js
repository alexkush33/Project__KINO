'use strict';








// const personalMovieDB = {
//      count: 0,
//      actors: {},
//      movies: {},
//      genres: [],
//      privat: false,
//      start: function () {
//           personalMovieDB.count = +prompt('Сколько фильмов вы посмотрели?', '');
//          while(personalMovieDB.count  == null || personalMovieDB.count  == '' || isNaN
//          (personalMovieDB.count )){
//           personalMovieDB.count  = +prompt('Сколько фильмов вы посмотрели?', '');
//          }
//     },
//     rememberMyFilms: function(){
//      for(let i = 0; i < 2; i++){
//           const a = prompt('Какой был последний просмотренный фильм?', ''),
//                 b = prompt('Насколько его оцените?', '');
//      if(a != null && b != null && a != '' && b != '' && a.length < 50) {
//           personalMovieDB[a] = b;
//           console.log('done');
//      }else{
//           console.log('error');
//           i --;
//      }

//      }
// },
// detectPersonalLevel: function() {
//      if(personalMovieDB.count < 10){
//           console.log('Мало');
//      }else if(personalMovieDB.count >= 10 && personalMovieDB.count < 30){
//           console.log('Классика');
//      }else if(personalMovieDB.count >= 30){
//           console.log('Киноман');
//      }else{
//           console.log('error');
//      }
// },
// showMyDB: function (hidden) {
//      if(!hidden){
//           console.log(personalMovieDB);
//      }
// },
// toggleVisibleMyDB: function() {
//     if(personalMovieDB.privat) {
//       personalMovieDB.privat = false;
//     }else{
//          personalMovieDB.privat = true;
//     }
// },


// writeYourGenres: function () {

//      for(let i = 1; i < 2 ; i++){
//         let genres = prompt(`Введите ваши любимые жанры через запятую!`);
//           if(genres == null || genres == ''){
//                console.log('Вы ввели некореектные данные!');
//                i--;
//           }else{
//                personalMovieDB.genres = genres.split(', ');
//           }
          
//      }
//      personalMovieDB.genres.forEach((item, i) => {
//           console.log(`Любимый жанр ${i + 1} - это ${item}`);
//      });

//    }

// };

// console.log(personalMovieDB);


//  SNAKE PROJECT NUMBER 1
// const canvas = document.getElementById('game');
// const ctx = canvas.getContext("2d");

// const ground = new Image(); 
// ground.src = 'img/ground.png';

// const foodImg = new Image(); 
// foodImg.src = 'img/food.png';

// let box = 32;

// let score = 0;

// let food = {
//      x: Math.floor((Math.random() * 17 + 1)) * box, 
//      y: Math.floor((Math.random() * 15 + 3)) * box, 
// };

// let snake = [];
// snake[0] = {
//     x: 9 * box,
//     y: 10 * box
// };

// document.addEventListener('keydown', direction);

// let dir;

// function direction(event) {
//      if(event.keyCode == 37 && dir != 'right'){
//           dir = 'left';
//      }else if(event.keyCode == 38 && dir != 'down'){
//           dir = 'up';
//      }else if(event.keyCode == 39 && dir != 'left'){
//           dir = 'right';
//      }else if(event.keyCode == 40 && dir != 'up'){
//           dir = 'down';
//      }
// }

// function eatTail(head, arr) {
//      for(let i = 0 ;i < arr.length; i++){
//           if(head.x == arr[i]. x && head.y == arr[i]. y){
//                clearInterval(game);
//           }
//      }
// }


// function drawGame() {
//      ctx.drawImage(ground, 0, 0);

//      ctx.drawImage(foodImg, food.x, food.y);

//      for(let i = 0; i < snake.length; i ++) {
//           ctx.fillStyle = 'red';
//           ctx.fillRect(snake[i].x, snake[i].y, box, box);
//      }

//  ctx.fillStyle = 'white';
//  ctx.font = '50px Arial';
//  ctx.fillText(score, box * 2.5, box * 1.7);

//  let snakeX = snake[0].x;
//  let snakeY = snake[0].y;

//  if(snakeX == food.x && snakeY == food.y){
//       score++;
//       food = {
//           x: Math.floor((Math.random() * 17 + 1)) * box, 
//           y: Math.floor((Math.random() * 15 + 3)) * box,
//       };
//  }else {
//       snake.pop();
//  }

//  if(snakeX < box || snakeY > box * 17 || snakeY < 3 * box || snakeY > box * 17){
//       clearInterval(game);
//  }
 
//  if(dir == 'left'){
//       snakeX -= box;
//  }else if(dir == 'right'){
//       snakeX += box;
//  }else if(dir == 'up'){
//       snakeY -= box;
//  }else if(dir == 'down'){
//       snakeY += box;
//  }
 
//  let newHead = {
//       x: snakeX,
//       y: snakeY
//  };

//  eatTail(newHead,snake);

//  snake.unshift(newHead);

// }

// let game = setInterval(drawGame, 100);


// for(let line = '#';line.length < 8;line += '#'){
//     console.log(line);

// }


// for (let n = 1; n <= 100; n++) {
//     let output = "";
//     if (n % 3 == 0) output += "Fizz";
//     if (n % 5 == 0) output += "Buzz";
//     console.log(output || n);
//   }

// ШАХМАТЫ

//   let size = 8;

//   let board = "";

// let board = ' ';

// for(let y = 0; y < 8; y++){
//     for(let x = 0 ; x < 8; x++){
//         if((x + y) % 2 == 0){
//            board += ' ';
//         }else{
//             board += '#';
//         }
//     }
//     board += '\n';
// }
// console.log(board);




// var result = "\n";

// for (var row = 1; row <= 8; row++) {

//   for (var cell = 1; cell <= 8; cell++) {

//     result += (row % 2 == cell % 2) ? "#" : " "; //Можно еще побитово - (row & 1 == cell & 1)

//   }

//   result += "\n";
// }
// console.log(result);

// const objA = {
//    a: 33,
//    b:{
//        c: true,
//        d: []
//    }
// };

// delete objA.b.c;

// const copyOfObjA = objA;

// copyOfObjA.a = 44;

// console.log(objA);

// const age = 23;
// const height = 123;

// const personalDate = {
//     height,
//     age,
//     color: 'brown'
// };

// console.log(personalDate);

// const myCity = {
//     city: 'New York',
//     cityGreeting() {
//         console.log('Greetings!!');
//     }
// };
// JSON.stringify(myCity);

//Функции

// function fun(a, b){
//     let c;
//     a = a + 1;
//     c = b + a;
//     return c;
// }
// fun(10, 3);

//Передача значения по ссылке

// const obj = {
//     a: 2,
//     b: 'ewew',
// };

// function copyA (objA) {
//     objA.a += 18;
//     return objA;
// }

// copyA(obj);
// console.log(obj.a);

// const obj = {
//     a: 13,
//     b: 'eqw'
// };

// function fun(objCopy){
//     const newObj = Object.assign({}, objCopy);
//     newObj.a += 7;
//     return newObj;
// }

// const newObj2 = fun(obj);
// console.log(obj);
// console.log(newObj2);

// CALLBACK ФУНКЦИЯ

// function call () {
//     console.log('Sasha');
// }

// setTimeout(call, 1000);

// function anotherfunction(){
//     //;
// }

// function call (callback){
//     callback();
// }

// call(anotherfunction);

// 

// ОБЛАСТЬ ВИДИМОСТИ

// let a;
// let b;

// function fun(){
//     let b;
//     b = 10;
//     a = true;
//     console.log(b);
// }

// fun();

// console.log(a);
// console.log(b);

//          

// FUNCTION DECLARATION!

// sayHi();

// function sayHi () {
//     alert('Привет');
// }


// FUNCTION EXPRESSION!

// const sayHi = function () {
//     alert('Привет');
// };

// const userName = 'Саша';

// console.log(`Привет, ${userName}! Как твои дела?`);


// function per (a,b) {
//     return a * b;
// }


// function per2 (func) {
//     let c = 10;
//     let d = 15;
//     const result = func(c,d);
//     console.log(result);
// }

// per2(per);

const API_KEY = 'b47161b2-75bb-48a4-bdca-21500cffd304';
const API_URL_POPULAR =
'https://kinopoiskapiunofficial.tech/api/v2.2/films/top?type=TOP_100_POPULAR_FILMS&page=1';
const API_URL_SEARCH =
'https://kinopoiskapiunofficial.tech/api/v2.1/films/search-by-keyword?keyword=';

getMovies(API_URL_POPULAR);

async function getMovies(url) {
    const resp = await fetch(url, {
        headers: {
            'Content-Type': 'application/json',
            'X-API-KEY': API_KEY,
        },
    });
    const respData = await resp.json();
    showMovies(respData);
}

function getClassByRate(vote) {
    if(vote >= 7) {
        return 'green';
    }else if(vote > 5) {
        return 'orange';
    }else{
        return 'red';
    }
}

function showMovies(data) {
    const moviesEl = document.querySelector('.movies');

    document.querySelector('.movies').innerHTML = '';

    data.films.forEach((movie) => {
        const movieEl = document.createElement('div');
        movieEl.classList.add('movie');
        movieEl.innerHTML = `
        <div class="movie__card">
                    <img 
                    src ='${movie.posterUrlPreview}'
                    class = 'movie__card--Spider'
                    alt='${movie.nameRu}'
                    />
                    <div class="movie__card--background"></div>
                </div>
                <div class="movie__info">
                    <div class="movie__title">${movie.nameRu}</div>
                    <div class="movie__genre">${movie.genres.map(
                        (genre) => `${genre.genre}`
                    )}</div>
                    <div class="movie__rating movie__rating-
                    -${getClassByRate(
                        movie.rating
                    )}">${movie.rating}</div>
                </div>
        `;
        moviesEl.appendChild(movieEl);
    });
}

const form = document.querySelector('form');
const search = document.querySelector('.header__search');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const apiSearchUrl =`${API_URL_SEARCH}${search.value}`;
    if(search.value) {
        getMovies(apiSearchUrl);
        search.value = '';
    }
});
