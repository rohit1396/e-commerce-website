import React from "react";
import "./FilterButton.css";

const FilterButton = ({ categories, filterItems }) => {
  return (
    <div className="filterbutton">
      {categories.map((category, index) => {
        return (
          <>
            <button key={index} onClick={() => filterItems(category)}>
              {category}
            </button>
          </>
        );
      })}
    </div>
  );
};

export default FilterButton;
