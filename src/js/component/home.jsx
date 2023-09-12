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
			type="text"
			onKeyDown={agregar}
			onChange={(e) => setInputValue(e.target.value)}
			placeholder="Whats needs to be done?"
			value={inputValue}
		/>
		<ul class="list-group">
			{list.map((item, key) => (
			<li class="list-group-item" key={key}>
				{item}
				<button onClick={() => cancelar(key)}>Cancelar</button>
			</li>
			))}
			<li class="list-group-item">{list.length} item left</li>
		</ul>
		
	  </div>
    </div>
  );
};

export default Home;
