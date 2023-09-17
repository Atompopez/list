import React, { useEffect, useState } from "react";

const Home = () => {
  const [list, setList] = useState([]);
  const [inputValue, setInputValue] = useState("");

  useEffect(()=>{
    fetch('https://playground.4geeks.com/apis/fake/todos/user/johan')
    .then((response) => response.json())
    .then((data)=> setList(data))
  },[]);

  useEffect(()=>{
    fetch('https://playground.4geeks.com/apis/fake/todos/user/johan', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          }, body:JSON.stringify(list)
        })
        .then((response)=>response.json())
        .then((data)=>console.log(data))
        console.log(list)
  },[list]);

  const agregar = (e) => {
    if (e.key === "Enter" && inputValue.trim() !== "") {
      let newId = list.length+1;
      setList([...list, {"done":false , "id":newId ,"label": inputValue}]);
      setInputValue("");
    }
  }

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
        <ul className="list-group">
          {list.map((item, key) => (
            <li className="list-group-item" id='item' key={key}>
              {item.label}
              <svg onClick={()=>{cancelar(key)}} xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-x" viewBox="0 0 16 16">
                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
              </svg>
            </li>
          ))}
          <li className="list-group-item" id="contador">{list.length} item left</li>
        </ul>
      </div>
    </div>
  );
};

export default Home;
