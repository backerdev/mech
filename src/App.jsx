import { useState, useEffect, useRef } from "react";

import "./App.css";

import { useGetFsorData } from "./useGetFsorDate";
function App() {
  const [search, setSearch] = useState("");
  const { bearings, services, goods, isLoading } = useGetFsorData(search);

  const inputRef = useRef();
  useEffect(function () {
    inputRef.current.focus();
  }, []);

  return (
    <div className="app">
      <nav className={isLoading ? "full" : ""}>
        <form>
          <div className="searchEngine">
            <label htmlFor="search" style={{ display: "none" }}>
              search
            </label>
            <input
              placeholder="Search here...will get it in 3sec!"
              type="text"
              value={search}
              ref={inputRef}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        </form>
      </nav>
      <span>{isLoading && search.length ? "Loading" : ""}</span>
      <section style={{ display: isLoading ? "none" : "" }}>
        {bearings.length ? (
          <>
            <h2>
              Bearings{" "}
              <span className="statics">{bearings.length} search found</span>
            </h2>
            {bearings.map((item, i) => (
              <div key={i} className="singleCart">
                <span className="headings">{item.item}</span>
                <span>{item.desc}</span>
                <span>{item.long_desc}</span>
                <span className="cost"> {item.cost && `$ ${item.cost}`}</span>
              </div>
            ))}
          </>
        ) : (
          ""
        )}
        {services.length ? (
          <>
            <h2>
              Tmc-Services{" "}
              <span className="statics">{services.length} search found</span>
            </h2>
            {services.map((item, i) => (
              <div key={i} className="singleCart">
                <span className="headings">{item.item}</span>
                <span>{item.desc}</span>
                <span>{item.long_desc}</span>
                <span className="cost"> {item.cost && `$ ${item.cost}`}</span>
              </div>
            ))}
          </>
        ) : (
          ""
        )}
        {goods.length ? (
          <>
            <h2>
              Tmc-Goods{" "}
              <span className="statics">{goods.length} search found</span>
            </h2>
            {goods.map((item, i) => (
              <div key={i} className="singleCart">
                <span className="headings">{item.item}</span>
                <span>{item.desc}</span>
                <span>{item.long_desc}</span>
                <span className="cost"> {item.cost && `$ ${item.cost}`}</span>
              </div>
            ))}
          </>
        ) : (
          ""
        )}
      </section>
    </div>
  );
}

export default App;
