const {createSlice} = require('@reduxjs/toolkit');
const {addPost} = require('../actions/post');

const data = null;
const initialState = [
  data,
];

const postReducer  = (prevState = initialState, action) =>{ 
  switch (action.type){
    case 'ADD_POST':
      return[...prevState, action.data];
    default:
      return prevState; 
  }
};

const postSlice = createSlice({
  name: 'post',
  initialState,
  reducers:{ // 동기적
    clearPost(state, action) {
      state.data = [];
    },
  },
  extraReducers:{ // 비동기적 
    [addPost.pending](state, action){

    },
    [addPost.fulfilled](state, action){

    },
    [addPost.rejected](state, action){

    },
  },
});
module.exports = postSlice;