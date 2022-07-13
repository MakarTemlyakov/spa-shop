import React from "react";
import "./Header.css";

const Header = ({ setOption }) => {
  const setOptionFilter = (e) => {
    setOption(e.target.value);
  };

  return (
    <header className="header">
      <div className="container">
        <div className="header-wrapper">
          <h2 className="title">Каталог</h2>
          <div className="filter">
            <label htmlFor="filter">Товары по TYPE:</label>
            <select id="filter" onChange={(e) => setOptionFilter(e)}>
              <option value={"all"} defaultChecked>
                ALL
              </option>
              <option value={"fence"}>FENCE</option>
              <option value={"fix"}>FIX</option>
              <option value={"post"}>POST</option>
              <option value={"rail"}>Rail</option>
              <option value={"plug"}>PLUG</option>
            </select>
          </div>
          <div className="display-type">
            <label htmlFor="display">Вид:</label>
            <select id="display">
              <option value={"list"}>Список</option>
              <option value={"tile"}>Плитка</option>
            </select>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
