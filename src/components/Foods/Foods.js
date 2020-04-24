import React, { useState } from 'react';
import { useEffect } from 'react';
import './Foods.css';
import BreakFast from '../Breakfast/BreakFast';
import { addToDatabaseCart, getDatabaseCart, removeFromDatabaseCart, clearLocalShoppingCart } from '../databaseManager';



const Foods = () => {
    // const clickHandler1 = () =>{
    //     const currentClass = document.getElementsByClassName();
    //      for (let i = 0; i < currentClass.length; i++) {
    //        currentClass[i].classList.toggle("active_link");
    //        console.log(currentClass[i]);
    //      }
            
         const [foods, setFoods] = useState([]);
         const [cart, setCart] = useState([]);                
         const shuffle = a => {
             for (let i = a.length; i; i--) {
                 let j = Math.floor(Math.random() * i);
                 [a[i - 1], a[j]] = [a[j], a[i - 1]];
             }
         };
         useEffect(()=> {
             fetch('https://red-onion-server.herokuapp.com/foods')
             .then(res => res.json())
             .then(data => {
                 shuffle(data);
                 console.log(data);
                 setFoods(data);
             })
         }, []);
     
        //  useEffect(()=> {
        //      const savedCart = getDatabaseCart();
        //      const foodKeys = Object.keys(savedCart);
        //      if(foods.length > 0){
        //          const previousCart = foodKeys.map( existingKey => {
        //              const food = foods.find( pd => pd.key === existingKey);
        //              food.quantity = savedCart[existingKey];
        //              return food;
        //          } )
        //          setCart(previousCart);
        //      }
        //  }, [foods]);
     
    //  const handleAddFood = (food) => {
    //      const toBeAddedKey = food.key;
    //      const sameFood = cart.find(pd => pd.key === toBeAddedKey);
    //      let count = 1;
    //      let newCart;
    //      if(sameFood){
    //          count = sameFood.quantity + 1;
    //          sameFood.quantity = count;
    //          const others = cart.filter(pd => pd.key !== toBeAddedKey);
    //          newCart = [...others, sameFood];
    //      }
    //      else{
    //          food.quantity = 1;
    //          newCart = [...cart, food];
    //      }
    //      setCart(newCart);
    //      addToDatabaseCart(food.key, count);
    //  }
    return (
        <div>
            <div className="navbar-container">
                <ul>
                    <li className="nav-link" id='1'>
                        <a href="#" >Breakfast</a>
                        <div className="underline"></div>
                    </li>
                    <li className="nav-link active-link" id='2'>
                        <a href="#">Lunch</a>
                        <div className="underline"></div>
                    </li>
                    <li className="nav-link" id='3'>
                        <a href="#">Dinner</a>
                        <div className="underline"></div>
                    </li>
                </ul>
            </div>
            <div className="food-container">        
        {
                foods.map(pd => <BreakFast
                    key={pd.key}
                    showAddToCart={true}
                    // handleAddFood = {handleAddFood}
                    food={pd}
                    ></BreakFast>)
            }
        </div>
        </div>
    );
};

export default Foods;