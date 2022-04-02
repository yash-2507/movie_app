const i1 = "./tinified/spiderman.jpg"
const i2 = "./tinified/hogwarts.jpg"
const i3 = "./tinified/john_snow.jpg"
const i4 = "./tinified/justice_league.jpg"
const i5 = "./tinified/pirates.jpg"
const i6 = "./tinified/marvel.jpg"

let arr = []
arr.push(i1)
arr.push(i2)
arr.push(i3)
arr.push(i4)
arr.push(i5)
arr.push(i6)


let container = document.getElementById('slideshow')
let img = document.createElement('img')
img.src = arr[0]
container.append(img)
let i = 1
setInterval(function() {
    if(i === arr.length) {
        i = 0
    }
    let image = arr[i]
    let img = document.createElement('img')
    img.src = image
    container.innerHTML = null
    container.append(img)
    i++
},3000)


// Movies Display

const data = `
The Dark Knight (2008)
9.1
PG-13 | 152 min | Action, Crime, Drama
https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_UY209_CR0,0,140,209_AL_.jpg


X-Men Apoallypse (2016)
6.9
PG-13 | 144 min | Action, Adventure, Sci-Fi
https://m.media-amazon.com/images/M/MV5BMjU1ODM1MzYxN15BMl5BanBnXkFtZTgwOTA4NDE2ODE@._V1_UY209_CR0,0,140,209_AL_.jpg


300 (2006)
7.6
PG-13 | 117 min | Action, Drama
https://m.media-amazon.com/images/M/MV5BNWMxYTZlOTUtZDExMi00YzZmLTkwYTMtZmM2MmRjZmQ3OGY4XkEyXkFqcGdeQXVyMTAwMzUyMzUy._V1_UY209_CR1,0,140,209_AL_.jpg


Avatar (2009)
7.9
PG-13 | 162 min | Action, Adventure, Fantasy
https://m.media-amazon.com/images/M/MV5BMTYwOTEwNjAzMl5BMl5BanBnXkFtZTcwODc5MTUwMw@@._V1_UY209_CR0,0,140,209_AL_.jpg


Batman Begins (2005)
8.3
PG-13 | 140 min | Action, Crime, Drama
https://m.media-amazon.com/images/M/MV5BOTY4YjI2N2MtYmFlMC00ZjcyLTg3YjEtMDQyM2ZjYzQ5YWFkXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_UY209_CR0,0,140,209_AL_.jpg


Captain America: The Winter Soldier (2014)
7.8
PG-13 | 136 min | Action, Adventure, Sci-Fi
https://m.media-amazon.com/images/M/MV5BMzA2NDkwODAwM15BMl5BanBnXkFtZTgwODk5MTgzMTE@._V1_UY209_CR1,0,140,209_AL_.jpg


Casino Royale (2006)
8
PG-13 | 144 min | Action, Adventure, Thriller
https://m.media-amazon.com/images/M/MV5BMDI5ZWJhOWItYTlhOC00YWNhLTlkNzctNDU5YTI1M2E1MWZhXkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_UY209_CR0,0,140,209_AL_.jpg


Dracula Untold (2014)
6.2
PG-13 | 92 min | Action, Drama, Fantasy
https://m.media-amazon.com/images/M/MV5BMTkzNzI1OTI4N15BMl5BanBnXkFtZTgwNTQ2NzEwMjE@._V1_UX140_CR0,0,140,209_AL_.jpg


Harry Potter and the Deathly Hallows: Part 2 (2011)
8.2
PG-13 | 130 min | Adventure, Fantasy, Mystery
https://m.media-amazon.com/images/M/MV5BMGVmMWNiMDktYjQ0Mi00MWIxLTk0N2UtN2ZlYTdkN2IzNDNlXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_UX140_CR0,0,140,209_AL_.jpg
`

stupid = []

data.split('\n\n').forEach(movie => {
    // let movie_name, rating, description, link

    let [movie_name, rating, description, link] = movie.trim().split('\n')
    // console.log(movie_name)

    movie_data = {
        "name": movie_name,
        "rating": rating,
        "description": description,
        "link": link
    }

    stupid.push(movie_data)

})

// console.log(stupid)
localStorage.setItem('movies',JSON.stringify(stupid))


let moviesContainer = document.querySelector('#movies')


stupid.forEach(function(elem) {
    let movieName = elem.name;
    let movieRating = elem.rating;
    let movieDescription = elem.description;
    let moviePoster = elem.link;

    let img = document.createElement('img')
    img.src = moviePoster;
    let title = document.createElement('h3')
    title.innerText = movieName;
    let rate = document.createElement('p')
    rate.innerText = movieRating
    let des = document.createElement('h5')
    des.innerText = movieDescription;
    
    let parentImg = document.createElement('div')
    
    let parentBody = document.createElement('div')
    parentBody.append(title,rate,des)
    parentBody.setAttribute('id','parentBody');
    parentImg.append(img,parentBody)
    // parentImg.classList.add('')
    parentImg.setAttribute('id','parentImg');
    // parentImg.style.display = 'flex'
    // parentImg.style.gap = '20px'
    moviesContainer.append(parentImg)

})


const rating = document.querySelectorAll('#parentBody>p')
// console.log(rating)
for(let i = 0; i < rating.length; i++) {
    let rate = rating[i].innerText
    // console.log(rate)
}

let selectValue = document.getElementById('select')
if(selectValue.value === 'Low') {
    console.log('done')
}