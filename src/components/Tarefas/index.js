import React from "react";

import { FaEdit, FaWindowClose } from "react-icons/fa";

import "./index.css";
export default function Tarefas({ tarefas, handleEdit, handleDelet }) {
  return (
    <ul className="tarefas">
      {tarefas.map((tarefa, index) => (
        <li key={tarefa}>
          {tarefa}
          <div className="editDelet">
            <FaEdit onClick={(e) => handleEdit(e, index)} className="edit" />
            <FaWindowClose
              onClick={(e) => handleDelet(e, index)}
              className="delet"
            />
          </div>
        </li>
      ))}
    </ul>
  );
}
