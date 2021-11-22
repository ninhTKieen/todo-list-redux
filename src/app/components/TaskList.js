import React from "react";
import { useSelector, useDispatch } from "react-redux";
import MyTask from "./MyTask";
import TaskInput from "./TaskInput";
const TaskList = () => {
  const tasks = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  const handleAddTask = (input) => {
    if(input) {
      dispatch({ type: "todos/todoAdded", payload: input });
    }
    console.log(tasks);
  };
  const completedTask = (id) => {
    dispatch({ type: "todos/todoToggled", payload: id });
  };
  const removeTask = (id) => {
    dispatch({ type: "todos/todoDeleted", payload: id });
  };
  const updateTask = (id, value) => {
    dispatch({
      type: "todos/todoEdited",
      payload: { id: id, replaceText: value },
    });
  };
  const deleteAllTasks = () => {
    dispatch({type : "todos/allDeleted"});
  }
  const markAllTasks = () => {
    dispatch({type : "todos/allCompleted"});
  }
  const deleteDoneTask = () => {
    dispatch({type : "todos/deletedDone"});
  }
  return (
    <div>
      <h1 className="title">Todo list with redux</h1>
      <TaskInput onChange={handleAddTask} />
      <div className = "pare">
        {/* This is pare */}
        <button className = "chil" onClick = {deleteAllTasks}>Delete All</button>
        <button className = "chil" onClick = {deleteDoneTask}>Delete Done Tasks</button>
        <button className = "chil" onClick = {markAllTasks}>Mark All Done</button>
      </div>
      {tasks.map((task) => {
        return (
          <MyTask
            task={task}
            completeTask={completedTask}
            removeTask={removeTask}
            updateTask={updateTask}
          />
        );
      })}
    </div>
  );
};

export default TaskList;
