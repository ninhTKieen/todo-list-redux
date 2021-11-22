// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';

// ReactDOM.render(
//   <React.StrictMode store = {store}>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

import store from "./store";
import {useSelector} from 'react-redux'
console.log("Initial state : ", store.getState());
const selectTodos = state => state.todos;
const unsubscribe = store.subscribe(() => {
  console.log("State after dispatch : ",store.getState());
});
store.dispatch({ type: "todos/todoAdded", payload: "Learn about actions" });
store.dispatch({ type: "todos/todoAdded", payload: "Learn about reducers" });
store.dispatch({ type: "todos/todoAdded", payload: "Learn about stores" });

store.dispatch({ type: "todos/todoToggled", payload: 0 });
store.dispatch({ type: "todos/todoToggled", payload: 1 });
store.dispatch({ type: "todos/allDeleted"});

// store.dispatch({ type: "filters/statusFilterChanged", payload: "Active" });

// store.dispatch({
//   type: "filters/colorFilterChanged",
//   payload: { color: "red", changeType: "added" },
// });

// store.dispatch({ type: "todos/todoAdded", payload: "Try creating a store" });
// store.dispatch({ type: "todos/todoDeleted", payload: 5 });
// store.dispatch({ type: 'todos/todoAdded', payload: 'Try creating a store' })
// store.dispatch({ type: 'todos/todoEdited', payload: {id : 4, replaceText : "Hello how are you"} })
// const tellsth = () => {
//   const todos = useSelector(selectTodos);
//   console.log(todos);
// }
// tellsth();
// unsubscribe();
