import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

export default function CategoriesCocktails() {
    const params = useParams();
    const [categories, setCategories] = useState([])

  useEffect(() => {
    async function fetchData() {
    const response = await axios.get(
      `https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${params.strCategory}`
    )
    console.log("CATEGORIES", response.data)
    setCategories(response.data.drinks)
  }
  fetchData()
  
  }, []);


    return (
        <div>
            {categories.map(c => {
                return <div>
                    <Link to={`/cocktail/${c.idDrink}`}>
                    <h3>{c.strDrink}</h3>
                    </Link>
                    <img src={c.strDrinkThumb} alt="cocktail" height="200px"/>
                </div>
            })}
        </div>
    )
}