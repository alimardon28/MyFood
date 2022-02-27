import React , {useState} from 'react';
import Mealitem from './MealItem';

const Meal = () => {

    const [search , setSearch] = useState();
    const [meal , SetMeal]=useState();
     const searchMeal = (event) =>{
       if(event.key === "Enter")
        {
           fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`)
           .then(res=>res.json())
           .then(data=>{
            SetMeal(data.meals)
           })
        }
     }


    return (
        <div className='MealMain'>
            <div className='MealHeading'>
                <h1 className='Heading'>Search Your Food Recipe</h1>
            </div>

            <div className='SearchBox'>
                <input value={search} onKeyPress={searchMeal} onChange={(e) => setSearch(e.target.value)} type="search"  className="SearchInput" placeholder="Enter Food Name"/>
            </div>
            <div className='MealItemBox'>
                {
                    (meal == null)? <p className='notfound__desc'>Not Found</p> : meal.map((res) => {
                        return (

                            <Mealitem  data={res}/>

                        )
                    })
                }
            </div>
        </div>
    );
}

export default Meal;
