const logIn = (data) =>{ // async action
   return (dispatch,getState)=> { // async action
    dispatch(logInRequest(data));
    try {
      setTimeout(()=>{
        dispatch(logInSuccess({
          userId: 1,
          nickname: 'pac', 
        }));
      }, 2000);
    } catch(e) {
      dispatch(loginInFailure(e));
    }
   };
};

const logInRequest = (data) => {
 return {
  type: 'LOG_IN_REQUEST',
  data,
 };
};

const logInSuccess = (data) =>{
  return {
    type: 'LOG_IN_SUCCESS',
    data: data,
  };
}

const logInFailure = (error) =>{
  return {
    type: 'LOG_IN_FAILURE',
    error,
  };
}

// const logIn = (data) =>{ // sync action creator
//   return {
//     type: 'LOG_IN', 
//     data:data,
//   };
// };

const logOut = () =>{
  return {
    type: 'LOG_OUT',
  };
}; 


module.exports = {
  logIn,
  logOut,
 };