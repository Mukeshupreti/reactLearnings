import { configureStore } from "@reduxjs/toolkit";
import { productReducer } from "./ProductSlice";
import { loginReducer } from "./LoginSlice";


//import { combineReducers,createStore } from 'redux';

// configureStore() will create store & will also combineReducers for us.

/* const rootReducer = combineReducers({
    pr:productReducer,
    lr:loginReducer
  })
   
  
  const combineStore = createStore(rootReducer);
   
*/

const reduxStore = configureStore({
  reducer: {
    pr: productReducer,
    lr: loginReducer,
  },
});


export{reduxStore}
