///////////////////////////////////////////////
///////////////////CART.JS/////////////////////
///////////////////////////////////////////////
/*
    In this file, you'll be writing code to
    calculate order totals. You'll also be 
    creating customer objects.  
*/

//////////////////PROBLEM 1////////////////////
/*  
    Below is a cart array that has food objects
    inside. 

    Write a callback below that uses the reduce
    array method to calculate the sum of all
    the food. 
*/

const cart = [
  {
    name: "pizza",
    price: 9.99,
  },
  {
    name: "pasta",
    price: 8.99,
  },
  {
    name: "salad",
    price: 7.99,
  },
];

const summedPrice = cart.reduce((total, food) => {
  return total + food.price;
}, 0);

console.log(summedPrice);

//////////////////PROBLEM 2////////////////////
/*  
    Write a function called `calcFinalPrice` that
    can take in `cartTotal`,`couponValue`,
    and `tax` arguments. 

    Inside the function, calculate the tax 
    on the cartTotal and add it in. Subtract
    the value of the coupon. Return the final
    number. 

    Note: the numbers passed in for `tax` will be
    decimals, for example: .06 for a 6% tax.
*/

const calcFinalPrice = (cartTotal, couponValue, tax) => {
  return (cartTotal * (1 + tax) - couponValue).toFixed(2);
};

console.log(calcFinalPrice(48.71, 5, 0.06));

//////////////////PROBLEM 3////////////////////
/*  
    In this problem, you'll create a model for 
    a customer object as well as an example
    object. 

    Plan out a customer object for the cart page.
    Think about the information that a 
    restaurant would need about its customers.

    In the TEXT ANSWER area below, describe the
    properties that your customer object will have
    and why you chose those properties.

    Explain what data types each property should be
    and why you chose those data types. 

    Your object should have at least 4 properties. 
*/

/*
    I decided on five different variables. firstName and lastName, both strings, for easy user identification; email, another string, so that the restaurant can send out deals and promotions; phoneNumber, a number, for text promotions; and birthday, a number, so that the user can get a special coupon on their birthday.

*/

/*
    Now, create a customer object following your own
    guidelines.
*/

const customer = {
  firstName: "Nicholas",
  lastName: "Kretzmer",
  email: "kretzmer42@devmonta.in",
  phoneNumber: 3864253612,
  birthday: 09191996,
};
