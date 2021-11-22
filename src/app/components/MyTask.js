import React, { useState } from "react";
import TaskInput from "./TaskInput";
import { CgCloseO as CloseIcon } from "react-icons/cg";
import { BiEdit as EditIcon } from "react-icons/bi";
import { AiOutlineFileDone as DoneIcon } from "react-icons/ai";
const MyTask = ({ task, completeTask, removeTask, updateTask }) => {
  const [edit, setEdit] = useState({
    id: "",
    text: "",
  });
  const submitUpdate = (value) => {
    updateTask(edit.id, value);
    setEdit({
      id: "",
      text: "",
    });
  };
  if (edit.id) {
    return <TaskInput edit={edit} onChange={submitUpdate} />;
  }
  return (
    <div className="task" key={task.id}>
      <div>
        <DoneIcon className="doneIcon" onClick={() => completeTask(task.id)} />
      </div>
      <div
        className={task.completed ? "taskComplete" : "textTask"}
        key={task.id}
      >
        {task.text}
      </div>

      <div className="icons">
        <CloseIcon className="removeIcon" onClick={() => removeTask(task.id)} />
        <EditIcon
          className="editIcon"
          onClick={() => setEdit({ id: task.id, text: task.text })}
        />
      </div>
    </div>
  );
};

export default MyTask;
