const apiResults = (state = [], action) => {
  switch (action.type) {
    case 'SET_SEARCH_RESULTS':
      return action.payload;
    case 'CLEAR_RESULTS':
      action.payload = [];
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
  export default apiResults;
  