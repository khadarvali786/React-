import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
    name: "counter",
    initialState: { countVal: 10},
    reducers: {
      increment: (state) => {
          state.countVal += 1;
      },
      decrement: (state) => {
          if( state.countVal > 0){
              state.countVal -= 1;
          }
          
      },
      add: (state,action) => {
          state.countVal += Number(action.payload);
      },
      reset: (state) => {
          state.countVal = 0;
      },
      del: (state,action) => {
          if(state.countVal >0){
              state.countVal -= Number(action.payload);
          }
      },
    },
  });
  export const counterActions = counterSlice.actions;
  export default counterSlice;