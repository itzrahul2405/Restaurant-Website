import React from 'react'
import classes from './AvailableMeals.module.css'



const AvailableMeals = () => {

    const DUMMY_MEALS = [
        {
          "id": 1,
          "name": "Classic Burger",
          "description": "Juicy beef patty with lettuce, tomato, and cheese on a sesame seed bun.",
          "price": 9.99
        },
        {
          "id": 2,
          "name": "Vegetarian Pasta",
          "description": "Delicious pasta with a medley of fresh vegetables and marinara sauce.",
          "price": 12.49
        },
        {
          "id": 3,
          "name": "Grilled Chicken Salad",
          "description": "Grilled chicken breast slices on a bed of crisp mixed greens with vinaigrette.",
          "price": 8.99
        },
        {
          "id": 4,
          "name": "Margherita Pizza",
          "description": "Classic pizza with tomato, fresh mozzarella, and basil leaves.",
          "price": 14.99
        },
        {
          "id": 5,
          "name": "Chocolate Fudge Brownie",
          "description": "Rich chocolate brownie topped with vanilla ice cream and chocolate sauce.",
          "price":6.99
        }
      ]

    const mealsList = DUMMY_MEALS.map(meal => (<li>{meal.name}</li>))
    return(
        <section className={classes.meal}>
            <ul>{mealsList}</ul>
        </section>
    );
}

export default AvailableMeals;