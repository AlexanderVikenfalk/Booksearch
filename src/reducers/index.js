import { combineReducers } from "redux";
import books from "./reducer_books";
import activeBook from "./reducer_active_book";
import visibilityFilter from './reducer_visibilityFilter'

const rootReducer = combineReducers({
  books,
  activeBook
});

export default rootReducer;
 