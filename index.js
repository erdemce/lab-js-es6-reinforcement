// ***************************************************************************
// Iteration 1 - `for...of` loop
// ***************************************************************************

const getFirstNames = arr => {
  const userFirstNames = [];
  for (let user of arr) {
    userFirstNames.push(user.firstName)
  }
  return userFirstNames;
};

getFirstNames(usersArray);
// expected output:
// [ 'Kirby', 'Tracie', 'Kendra', 'Kinney', 'Howard', 'Rachelle', 'Lizzie' ]

// ***************************************************************************
// Iteration 2 - `for...of` loop and ES6 string literals `${}`
// ***************************************************************************

const getFullNames = arr => {
  const userAllNames = [];
  for (let user of arr) {
    userAllNames.push(`$(user.firstName) $(user.lastName)`)
  }
  return userAllNames;
};

getFullNames(usersArray);
// expected output:
// [ 'Kirby Doyle', 'Tracie May', 'Kendra Hines', 'Kinney Howard',
//   'Howard Gilmore', 'Rachelle Schneider', 'Lizzie Alford' ]

// ***************************************************************************
// Iteration 3 - ES6 destructuring , for of loop, object literal
// ***************************************************************************

const getUsersCreditDetails = arr => {
  const userCreditDetails = [];

  for(let user of arr){
    let{firstName,lastName,balance}=user   
    userCreditDetails.push({firstName,lastName,balance});
  }
  return userCreditDetails
};

getUsersCreditDetails(usersArray);

// expected output:
// [ { firstName: 'Kirby', lastName: 'Doyle', balance: '$3,570.06' },
// { firstName: 'Tracie', lastName: 'May', balance: '$1,547.73' },
// { firstName: 'Kendra', lastName: 'Hines', balance: '$12,383.08' },
// { firstName: 'Kinney', lastName: 'Howard', balance: '$3,207.06' },
// { firstName: 'Howard', lastName: 'Gilmore', balance: '$21,307.75' },
// { firstName: 'Rachelle', lastName: 'Schneider', balance: '$35,121.49' },
// { firstName: 'Lizzie', lastName: 'Alford', balance: '$4,382.94' } ]

// ***************************************************************************
// Iteration 4 - practice `.filter()` method and how to return two elements
// ***************************************************************************

const genderView = users => {

  let femaleUsers=getFullNames(users).filter(user=>user.gender=="female")
  let maleUsers=getFullNames(users).filter(user=>user.gender=="male")
  return {femaleUsers,maleUsers}
};

genderView(usersArray);
// expected output:
// {
//    femaleUsers: [ 'Tracie May', 'Kendra Hines', 'Rachelle Schneider', 'Lizzie Alford' ],
//    maleUsers: [ 'Kirby Doyle', 'Kinney Howard', 'Howard Gilmore' ]
// }

// ***************************************************************************
// Bonus - Iteration 5
// ***************************************************************************

const data = genderView(usersArray);

const genderCount = data => {
  console.log("Female: "+data.femaleUsers.length)
  console.log("Male: "+data.maleUsers.length)
};

genderCount(data);
// expected output:
// Female: 4
// Male: 3

// ***************************************************************************
// Bonus - Iteration 6
// ***************************************************************************

//as a helper function
function changeAsInteger(str){
  let newStr=""
  let arr=["$",",","."];
  
  for(let i=0;i<str.length;i++){
    if(!arr.includes(str[i])){
      newStr=newStr+str[i]
    }
    
  }
  return parseInt(newStr)/100
} 
const promo20 = users => {
  let myArr=getUsersCreditDetails(users)
  .filter(user=>changeAsInteger(user.balance)>20000)
  .forEach(user=>console.log(`Dear ${user.firstName}, since your balance is
  ${user.balance}, you are eligible to apply for this awesome credit card.`)
    )
};

promo20(usersArray)



// expected output:
// Dear Howard, since your balance is $21,307.75, you are eligible to apply for this awesome credit card.
// Dear Rachelle, since your balance is $35,121.49, you are eligible to apply for this awesome credit card.

// ***************************************************************************
// Bonus - Iteration 7
// ***************************************************************************
/*
Bonus - Iteration 7
Create a function addActive() which should loop through the usersArray and add 
a new property isActive with a value true to all users (hint: each user in the
  usersArray is represented with object and you could use ... with objects 😉 ).

Check the index.js to see what should be expected output.*/

//we could not do it by using spread operator but we can do it in another way
const addActive = users => {
  let newUsers=users.map(user=>user)
  newUsers.forEach(user=>{
    user.isActive=true;
  })
  return newUsers;
};

console.log(addActive(usersArray));
// expected output:
// [
//    { firstName: 'Kirby',
//      lastName: 'Doyle',
//      id: 'b71794e5-851e-44b5-9eec-1dd4e897e3b8',
//      isActive: true,
//      balance: '$3,570.06',
//      gender: 'male'
//    },
//    {
//      // ...
//    }
// ]
