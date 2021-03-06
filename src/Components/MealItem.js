import React from 'react';

const Mealitem = (Mymeal) => {
    console.log(Mymeal.data);
    return (
        <>

        <div className='MealCard'>
            <img className='MealCardImg' src={Mymeal.data.strMealThumb} alt='mealsimg'/>
            <div className='MealInfo'>
                <h2 className='MealInfo__heading'>{Mymeal.data.strMeal}</  h2>
                <p className='MealInfo__desc'>{Mymeal.data.strInstructions}</p>
            </div>
            <div className='MealYoutubeBox'>
              <a className='MealYoutubeBox__link' href={Mymeal.data.strYoutube}>Go To Youtube</a>
          </div>
          </div>
        </>
    );
}

export default Mealitem;
