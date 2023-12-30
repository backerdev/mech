import { useState, useEffect } from "react";
import bearingLists from "./datas/bearings.json";
import tmcGoods from "./datas/tmc_goods.json";
import tmcSvs from "./datas/tmc_service.json";

export function useGetFsorData(search) {
  const [isLoading, setIsLoading] = useState(true);
  //   const [msg, setMsg] = useState("");
  const [bearings, setBearings] = useState([]);
  const [services, setServices] = useState([]);
  const [goods, setGoods] = useState([]);

  useEffect(() => {
    if (!search) {
      setBearings([]);
      setServices([]);
      setGoods([]);
      return;
    }

    function handleSearch() {
      setIsLoading(true);
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
      //   if ((!bearings && !services) || !goods)
      //     return setMsg("No Search result for the search!.");

      setIsLoading(() => true);

      setBearings(bearingResult);
      setServices(tmcSvcResult);
      setGoods(tmcGdsResult);
      setIsLoading(() => false);
    }
    return handleSearch();
  }, [search]);

  return { bearings, services, goods, isLoading };
}
