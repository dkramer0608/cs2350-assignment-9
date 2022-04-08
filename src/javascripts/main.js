// Required by Webpack - do not touch
require.context('../fonts/', true, /\.(eot|ttf|woff|woff2)$/i)
require.context('../images/', true, /\.(png|jpg|jpeg|gif|svg)$/i)
require.context('../stylesheets/', true, /\.(css|scss)$/i)

//TODO - Your ES6 JavaScript code (if any) goes here
import 'bootstrap'

import { books } from './books'

for(let b of books){

    let b_thumb = document.getElementById('b' + m.id)
    m_thumb.innerHTML = `
        <img src="${b.poster}" alt="${b.title}" class="img-thumbnail"/>
    `

        b_thumb.onclick = function() {
            displayBooks(b)
        }

}

let featured_books = document.querySelector(".featured")
function displayBooks(books) {
    featured_movie.innerHTML = `
    <div class="card">
          <div class="card-header">${movie.title}</div>
          <img src="${movie.poster}" class="card-img-top" alt="${movie.title}">
          <div class="card-body">
            <h5 class="card-title"><small>${movie.year}, ${movie.genre}</small></h5>
            <p class="card-text">${movie.plot}</p>
          </div>
          <div class="card-footer text-muted">
            <div class="row row-cols-3">
              <div class="col"><strong>Rating: </strong> ${books.author}</div>
              <div class="col"><strong>Rated: </strong>${books.released}</div>
              <div class="col"><strong>Voted: </strong>${books.plot}</div>
          </div>
        </div>
      </div>
    `
}


function searchBooks(event) {
    event.preventDefault()

    let input = document.querySelector('[type="search"]').value ||""
    let count = 0
    for(let b of books) {
        if(m.title.toUpperCase().indexOf(input.toUpperCase()) == -1) {
         document.querySelector(`#m${m.id}`).classList.add('d-none')
    }else {
        document.querySelector(`#m${m.id}`).classList.remove('d-none')
        count++
    }
}
 featured_books.innerHTML = count ==0 ? 'Nothing was found' : ''

}

document.querySelector("button").onclick = searchBooks
document.querySelector('[type="search"]').onsearch = searchBooks
document.querySelector("form").onsubmit = searchBooks