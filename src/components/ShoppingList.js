// See the search algorithm command given by the official solution as
// reproduced in the code below:
//

import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items, setItems, onItemFormSubmit }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [search, setNameDemand] = useState("");

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  function onSearchChange(event) {
    setNameDemand(event.target.value);
  }
  
  // The search algorithm command is the last predicate element
  // of the return statement of the variable below:
  //
  const itemsToDisplay = items.filter((item) => {
    if (selectedCategory === "All"
        && search === "") return true;
    
    const len = search.length;
    return ( 
      (item.category === selectedCategory
        || selectedCategory === "All")
      && item.name.toLowerCase().includes(search.toLowerCase())
    );
  });

  return (
    <div className="ShoppingList">
      <ItemForm 
        items={items}
        setItems={setItems}
        onItemFormSubmit={onItemFormSubmit}
      />
      <Filter 
        onCategoryChange={handleCategoryChange}
        onSearchChange={onSearchChange} 
        search={search}
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
