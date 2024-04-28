// How to run it
//  use command "/usr/bin/node MapEx.js"

// map method work on array
// it accept callback funtion with signature "array map (element,[index],[array])"
// element-current, index-curent ,array-current array.
// it return array and takes 3 parameter [index],[array] are optional
//const MapEx1 =() =>{

let arr = [2, 3, 6, 4, 5, 6];

let arr1 = arr.map((element, index, number) => {
  console.log(element, index, number);
  return element;
});

let products=[
{code:1,pName:"Apple"},
{code:2,pName:"Banana"},
{code:3,pName:"Grapes"},
{code:4,pName:"Oranges"},
]

// select all the productName


let productName= products.map(element=> element.pName);
console.log("productname ",productName);

 let arr2 = arr.map((element) => element * element);
 console.log("square Array" ,arr2);