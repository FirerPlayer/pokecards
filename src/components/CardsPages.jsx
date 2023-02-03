import axios from "axios";
import { useState, useEffect } from "react";

import Card from "./Card";
import LoadingCard from "./LoadingCard";
import Paginator from "./Paginator";

function CardPages() {
  const cPp = localStorage.getItem("cardsPerPage")
    ? Number(localStorage.getItem("cardsPerPage"))
    : 20;
  const [items, setItems] = useState([]);
  const [itemsTotal, setItemsTotal] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [cardsPerPage, setCardsPerPage] = useState(cPp);

  useEffect(() => {
    const getInitalPok = async () => {
      const res = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/?limit=${cardsPerPage}&offset=0`
      );
      const data = await res.data;
      setItemsTotal(data.count);
      setItems(data.results);
      setIsLoading(false);
    };

    getInitalPok();
  }, []);

  useEffect(() => {
    handlePageClick(1, {});
    localStorage.setItem("cardsPerPage", cardsPerPage.toString());
  }, [cardsPerPage]);

  const handlePageClick = async (page, el) => {
    let currentPage = page - 1;
    setIsLoading(true);
    const getNewItems = async () => {
      const res = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/?limit=${cardsPerPage}&offset=${
          currentPage * cardsPerPage
        }`
      );
      const data = await res.data;
      setItems(data.results);
      setIsLoading(false);
    };
    getNewItems();
    // scroll to the top
    window.scrollTo(0, 0);
  };

  return (
    <div className="flex flex-col items-center">
      <div className="m-0 flex flex-row flex-wrap gap-6 justify-center px-12">
        {isLoading
          ? Array.from(Array(cardsPerPage), (v, i) => i).map((el, i) => (
              <LoadingCard key={i} />
            ))
          : items.map((item, i) => {
              return <Card key={i} url={item.url} />;
            })}
      </div>
      <Paginator
        itemsTotal={itemsTotal}
        limit={cardsPerPage}
        setLimit={setCardsPerPage}
        onChange={handlePageClick}
      />
    </div>
  );
}

export default CardPages;
