const createSlice = require("@reduxjs/toolkit").createSlice;
//Action
const initialState = {
  numOfCakes: 10,
};
//Reducer
const cakeSlice = createSlice({
  name: "cake",
  //   initialState:initialState
  initialState,
  reducers: {
    ordered: (state) => {
      state.numOfCakes--;
    },
    restocked: (state, action) => {
      state.numOfCakes += action.payload;
    },
  },
});

module.exports = cakeSlice.reducer;
module.exports.cakeActions = cakeSlice.actions;
