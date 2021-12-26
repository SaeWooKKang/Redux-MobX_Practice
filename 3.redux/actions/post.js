const addPost = (data)=>{
  return {
    type: 'ADD_POST',
    data: data,
  };
};

module.exports = {
  addPost,
 };