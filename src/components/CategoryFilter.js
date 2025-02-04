import React from "react";

function CategoryFilter({ categories, selectedCategory, handleCategorySelection }) {
  const mappedCategories = categories.map((category, index) => (
    <button
      className={category === selectedCategory ? "selected" : ""}
      onClick={() => handleCategorySelection(category)}  // Pass category directly
      key={index}
    >
      {category}
    </button>
  ));

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {mappedCategories}
    </div>
  );
}

export default CategoryFilter;