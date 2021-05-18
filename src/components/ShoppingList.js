import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [nameDemand, setNameDemand] = useState("");

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  function onSearchChange(event) {
    setNameDemand(event.target.value);
  }

  const itemsToDisplay = items.filter((item) => {
    if (selectedCategory === "All"
        && nameDemand === "") return true;
    
    const len = nameDemand.length;
    console.log(item.name.substr(0,len));
    console.log(nameDemand);
    return ( 
      (item.category === selectedCategory
        || selectedCategory === "All")
      && item.name.substr(0,len) === nameDemand
    );
  });

  return (
    <div className="ShoppingList">
      <ItemForm />
      <Filter 
        onCategoryChange={handleCategoryChange}
        onSearchChange={onSearchChange} 
      />
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
