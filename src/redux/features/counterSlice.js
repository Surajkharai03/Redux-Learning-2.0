import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
    name:'counter',  // ye help krta h redux ko ki ye wala slice kiske liye h means m kiske bare m baat kr rha hu 
    initialState:{
        value:10
    },
    reducers:{                          // vo functions jiske andr hm kaam krna chahte h
        increment: (state) =>{          // increment naam ka ek reducers h jo state ki value ko 1+
            state.value += 1


        },
        decrement: (state) =>{              // decrement naam ka ek reducers h jo state ki value ko 1-
            state.value -= 1

        },
        incrementByAmount: (state,actions) =>{
            state.value += actions.payload     // 
        }

    }
})

export const {increment,decrement,incrementByAmount} = counterSlice.actions
export default counterSlice.reducer


// incremnet and decrement 2 actions h