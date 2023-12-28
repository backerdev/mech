import { useState, useEffect } from "react";

import "./App.css";
import bearingLists from "./datas/bearings.json";
import tmcGoods from "./datas/tmc_goods.json";
import tmcSvs from "./datas/tmc_service.json";
function App() {
  // const bearings = bearingLists;
  const [bearings, setBearings] = useState([]);
  const [services, setServices] = useState([]);
  const [goods, setGoods] = useState([]);
  // const [resultItems, setResultItems] = useState([]);
  // const [selectedServive, setSelectedService] = useState("bearing");
  const [search, setSearch] = useState("");

  useEffect(() => {
    if (!search) return;
    function handleSearch() {
      // let Service = bearings || tmcSvs || tmcGoods;

      // e.preventDefault();
      // if (!search) return;
      // if (selectedServive === "tmc_svc") {
      //   Service = tmcSvs;
      // } else if (selectedServive === "tmc_gds") {
      //   Service = tmcGoods;
      // } else {
      //   Service = bearings;
      // }
      const bearingResult = bearingLists.filter(
        (item) =>
          item?.item === Number(search) ||
          item?.long_desc?.toUpperCase()?.search(search.toUpperCase()) !== -1 ||
          item?.desc
            .toUpperCase()
            .replace("-", " ")
            ?.search(search.toUpperCase()) !== -1 ||
          item?.material === Number(search)
      );
      const tmcSvcResult = tmcSvs.filter((item) => {
        if (
          item.item === Number(search) ||
          item?.desc
            .toUpperCase()
            .replace("-", " ")
            ?.search(search.toUpperCase()) !== -1
        )
          return item;
      });

      const tmcGdsResult = tmcGoods.filter((item) => {
        if (
          item?.item === Number(search) ||
          item?.long_desc?.toUpperCase()?.search(search.toUpperCase()) !== -1 ||
          item?.desc
            .toUpperCase()
            .replace("-", " ")
            ?.search(search.toUpperCase()) !== -1 ||
          item?.material === Number(search)
        )
          return item;
      });

      setBearings(bearingResult);
      setServices(tmcSvcResult);
      setGoods(tmcGdsResult);
      // const result = Service.filter((item) => {
      //   if (
      //     item?.item === Number(search) ||
      //     item?.long_desc?.toUpperCase()?.search(search.toUpperCase()) !== -1 ||
      //     item?.desc
      //       .toUpperCase()
      //       .replace("-", " ")
      //       ?.search(search.toUpperCase()) !== -1 ||
      //     item?.material === Number(search)
      //   ) {
      //     return item;
      //   }
      // });
      // const result2 = Service.filter((item) => {
      //   if (
      //     item?.item === Number(search) ||
      //     item?.desc
      //       .toUpperCase()
      //       .replace("-", " ")
      //       ?.search(search.toUpperCase()) !== -1
      //   ) {
      //     return item;
      //   }
      // });
      // setResultItem(result2 ? result2 : result);
      // const test2 = "Provision";
      // const testt =
      //   "A.1.1 Provision of one (1) full time resident mechanical maintenance supervisor during normal working hours, as specified. ";
      // // console.log(testt.split(" ").filter(Number));
      // console.log(testt.toUpperCase().search(test2.toUpperCase()));
    }
    return handleSearch();
  }, [bearings, search]);

  // function handleSearch(e) {
  //   let Service = [];
  //   e.preventDefault();
  //   if (!search) return;
  //   if (selectedServive === "tmc_svc") {
  //     Service = tmcSvs;
  //   } else if (selectedServive === "tmc_gds") {
  //     Service = tmcGoods;
  //   } else {
  //     Service = bearings;
  //   }
  //   const result = Service.filter((item) => {
  //     if (
  //       item?.item === Number(search) ||
  //       item?.long_desc?.toUpperCase()?.search(search.toUpperCase()) !== -1 ||
  //       item?.desc
  //         .toUpperCase()
  //         .replace("-", " ")
  //         ?.search(search.toUpperCase()) !== -1 ||
  //       item?.material === Number(search)
  //     ) {
  //       return item;
  //     }
  //   });
  //   const result2 = Service.filter((item) => {
  //     if (
  //       item?.item === Number(search) ||
  //       item?.desc
  //         .toUpperCase()
  //         .replace("-", " ")
  //         ?.search(search.toUpperCase()) !== -1
  //     ) {
  //       return item;
  //     }
  //   });
  //   setResultItem(result2 ? result2 : result);
  //   // const test2 = "Provision";
  //   // const testt =
  //   //   "A.1.1 Provision of one (1) full time resident mechanical maintenance supervisor during normal working hours, as specified. ";
  //   // // console.log(testt.split(" ").filter(Number));
  //   // console.log(testt.toUpperCase().search(test2.toUpperCase()));
  // }
  return (
    <div className="app">
      <nav>
        <form>
          <div className="searchEngine">
            <label htmlFor="search" style={{ display: "none" }}>
              search
            </label>
            <input
              placeholder="Search here..."
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            {/* <div style={{ display: "flex" }}>
              <select
                value={selectedServive}
                onChange={(e) => setSelectedService(e.target.value)}
              >
                <option value="bearing">Bearings</option>
                <option value="tmc_svc">TMC-Service</option>
                <option value="tmc_gds">TMC-Goods</option>
              </select>
              <button type="submit">Search</button>
            </div> */}
          </div>
          {/* <span className="statics">
            {resultItem.length
              ? `${resultItem.length} items found`
              : "Please select service before search"}
          </span> */}
        </form>
      </nav>

      <section>
        {bearings.length ? (
          <>
            <h2>Bearings</h2>
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
            <h2>Tmc-Services</h2>
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
            <h2>Tmc-Goods</h2>
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
