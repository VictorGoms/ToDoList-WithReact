import React from "react";

import { FaPlus } from "react-icons/fa";

import "./form.css";

export default function Form({ handleSubmit, mudInput, novaTarefa }) {
  return (
    <form onSubmit={handleSubmit} action="" className="form">
      <input onChange={mudInput} type="tex" value={novaTarefa} />
      <button type="submit">
        <FaPlus />
      </button>
    </form>
  );
}
