import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./features/counterSlice";

 export const store = configureStore({
    reducer:{   // features
        counter:counterReducer          // default export ko hm kisi bhi naam se bhej skte h 

    }
})