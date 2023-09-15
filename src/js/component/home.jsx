import React, { useState } from "react";

const Home = () => {
  const [list, setList] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const agregar = (e) => {
    if (e.key === "Enter" && inputValue.trim() !== "") {
      setList([...list, inputValue]);
      setInputValue("");
    }
  };

  const cancelar = (k) => {
    const copiaList = [...list];
    copiaList.splice(k, 1);
    setList(copiaList);
  };

  return (
    <div className="container">
      <div className="textoPrincipal">todos</div>
      <div className="lista">
        <input
          className="entrada"
          type="text"
          onKeyDown={agregar}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Whats needs to be done?"
          value={inputValue}
        />
        <ul class="list-group">
          {list.map((item, key) => (
            <li class="list-group-item" id='item' key={key}>
              {item}
              <svg onClick={cancelar} xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
              </svg>
            </li>
          ))}
          <li class="list-group-item" id="contador">{list.length} item left</li>
        </ul>
      </div>
    </div>
  );
};

export default Home;
