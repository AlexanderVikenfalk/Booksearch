// State argument is notapplication state, only the state
// this reducers is responsible for

export default function(state = null, action) {
  switch (action.type) {
    case "BOOK_SELECTED":
      return action.payload;
  }
  return state;
}
