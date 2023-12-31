import React from 'react';
import Todo from '../Todo/Todo';


const List = ({tasks, handleDelete}) => {
  return (
    <div>
      {tasks.map(task=> <Todo key={task.id} task={task} tasks={tasks} handleDelete={handleDelete}/>)}
    </div>
  );
};

export default List;