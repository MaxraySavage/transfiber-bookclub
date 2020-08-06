const resultDetails = (state = {}, action) => {
  switch (action.type) {
    case 'SET_RESULT_DETAILS':
      return action.payload;
    default:
      return state;
  }
    // switch (action.type) {
    //   case 'SET_TO_LOGIN_MODE':
    //     return 'login';
    //   case 'SET_TO_REGISTER_MODE':
    //     return 'register';
    //   default:
    //     return state;
    // }
  };

// loginMode will be on the redux state at:
// state.loginMode
  export default resultDetails;
  