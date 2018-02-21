import axios from 'axios';

const API_KEY = 'AIzaSyBNAWMcvLEqt77K4a9ypVuA8-ZilXMAQng'
const ROOT_URL = 'https://www.googleapis.com/books/v1/volumes'

let nextBookId = 0;


export function selectBook(book) {
  // selectBook is an ActionCreator, it need to return an action,
  // an object with a teype property.
  return {
    type: "BOOK_SELECTED",
    payload: book
  };
}

export function addBook(book) {
  // searchBook is an ActionCreator, it need to return an action,
  // an object with a teype property.
  console.log(book.title);
  console.log(book.pages);
  return {
    type: "BOOK_ADDED",
    id: nextBookId++,
    title: book.title,
    author: book.author,
    pages: book.pages
  };
}

// export const setVisibilityFilter = filter => {
//   return {
//     type: "SET_VISIBILITY_FILTER",
//     filter
//   };
// };

// export const VisibilityFilters = {
//   SHOW_ALL: "SHOW_ALL",
//   SHOW_NONE: "SHOW_NONE"
// };

export function fetchBook(title) { 
  const url = `${ROOT_URL}?q=${title}&key=${API_KEY}`;    
  const request = axios.get(url);
  return {
    type: 'FETCH_BOOK',
    payload: request
  };
}
