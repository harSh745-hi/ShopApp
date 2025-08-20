// import { configureStore } from "@reduxjs/toolkit";
// import { CartSlice } from "./Slices/CartSlice";

import { configureStore } from "@reduxjs/toolkit";
import { CartSlice } from "./Slices/CartSlice";

// export const store = configureStore({
//     reducer:{
//         cart: CartSlice.reducer,
//     }
// });

export const store = configureStore({
    reducer: {
        cart : CartSlice.reducer,
    }
}) 
export default store;

