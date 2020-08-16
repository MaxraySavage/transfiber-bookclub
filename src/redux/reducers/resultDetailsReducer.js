const resultDetails = (state = {}, action) => {
  switch (action.type) {
    case 'SET_RESULT_DETAILS':
      return action.payload;
    default:
      return state;
  }
};

// loginMode will be on the redux state at:
// state.loginMode
  export default resultDetails;
  