const initialState = [
  { id: 1, text: "Learn Redux", completed: true },
  {
    id : 2,
    text : `This is the first time 
          I've seen the word Pneumonoultramicroscopicsilicovolcanoconiosis. 
          It's a long one.`,
    completed : false
  }
];

const nextTodoId = (todos) => {
  const maxId = todos.reduce((maxId, todo) => Math.max(todo.id, maxId), -1);
  return maxId + 1;
};

const todosReducer = (state = initialState, action) => {
  switch (action.type) {
    case "todos/todoAdded": {
      return [
        ...state,
        {
          id: nextTodoId(state),
          text: action.payload,
          completed: false,
        },
      ];
    }
    case "todos/todoToggled": {
      return state.map((todo) => {
        if (todo.id !== action.payload) {
          return todo;
        }
        return {
          ...todo,
          completed: !todo.completed,
        };
      });
    }
    case "todos/todoDeleted": {
      return state.filter((todo) => todo.id !== action.payload);
    }
    case "todos/todoEdited": {
      return state.map((todo) => {
        if (todo.id !== action.payload.id) {
          return todo;
        }
        return {
          ...todo,
          text: action.payload.replaceText,
          completed : false
        };
      });
    }
    case "todos/allCompleted" : {
      return state.map((todo) => {
        return {...todo, completed : true};
      })
    }
    case "todos/allDeleted" : {
      state = [];
      return state;
    }
    case "todos/deletedDone" : {
      return state.filter(todo => !todo.completed);
    }    
    default: {
      return state;
    }
  }
};

export default todosReducer;
