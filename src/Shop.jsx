import React, { useContext, useState } from "react";
import ItemsContext from "./ItemsContext";
import Card from "./Card";

const Shop = () => {
  const { list } = useContext(ItemsContext);
  const [filter, setfilter] = useState(list);
  const [value, setvalue] = useState(0);

  const [image, setimage] = useState(
    list.map(({ id, image }) => {
      return { id, image };
    })
  );
  const handlechange = (e) => {
    const value = Number(e.target.value);
    const filtered = list.filter((ele) => {
      return Number(ele.price.slice(1)) <= value;
    });
    console.log(filtered);
    setfilter(filtered);
  };
  const handleimage = (item, newimage) => {
    setimage((prev) =>
      prev.map((ele) => (ele.id == item.id ? { ...ele, image: newimage } : ele))
    );
  };
  // console.log(filter)
  return (
    <div className="shop" style={{ padding: "20px", textAlign: "center", width: "100%"}}>
      <h1>Shop Page</h1>
      <div className="filter">
        <h2>FILTER</h2>
        <input
          type="range"
          min="0"
          max="440"
          onChange={(e) => {
            handlechange(e);
            setvalue(e.target.value);
          }}
        />
        <span>{`$${value}.00`}</span>
      </div>
      <div
        className="cards"
        style={{
          display: filter.length == 0 ? "flex" : "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gridGap: "10px",
          gridTemplateRows: "auto",
          width: "100%",
        }}
      >
        {filter.length == 0 ? (
          <h1
            style={{
              display: "flex",
              backgroundColor: "beige",
              width: "100%",
              justifyContent: "center",
            }}
          >
            No items found
          </h1>
        ) : (
          filter.map((e) => {
            const currentimg = image.find((ele) => ele.id == e.id);
            return (
              <Card key={e.id} e={e} handleimage={handleimage} currentimg={currentimg} />
            );
          })
        )}
      </div>
    </div>
  );
};

export default Shop;
