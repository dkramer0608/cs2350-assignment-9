// Required by Webpack - do not touch
require.context('../fonts/', true, /\.(eot|ttf|woff|woff2)$/i)
require.context('../images/', true, /\.(png|jpg|jpeg|gif|svg)$/i)
require.context('../stylesheets/', true, /\.(css|scss)$/i)

//TODO - Your ES6 JavaScript code (if any) goes here
import 'bootstrap'

import { books } from './books'

for(let b of books){

    let b_thumb = document.getElementById('b' + b.id)
    b_thumb.innerHTML = `
        <img src="${b.poster}" alt="${b.title}" class="img-thumbnail"/>
    `

        b_thumb.onclick = function() {
            displayBooks(b)

          
        }

}

let featured_books = document.querySelector(".featured")
function displayBooks(books) {
    featured_books.innerHTML = `
    <div class="card">
          <div class="card-header">${books.title}</div>
          <img src="${books.poster}" class="card-img-top" alt="${books.title}">
          <div class="card-body">
          </div>
          <div class="card-footer text-muted">
            <div class="row row-cols-2">
              <div class="col"><strong>Rating: </strong> ${books.author}</div>
              <div class="col"><strong>Rated: </strong>${books.released}</div>
              <div class="col2"><strong>Plot: </strong>${books.plot}</div>
              <form action="/page.html">
              <input type="submit" value="Send Suggestion Form" />
          </form>
          </div>
        </div>
      </div>
    `
}


