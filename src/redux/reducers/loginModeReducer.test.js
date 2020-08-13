import loginModeReducer from './loginModeReducer';

describe('Testing the loginModeReducer...', ()=>{

  test('test initial state is login', ()=>{
    // testing initialization, don't really care about the action
    const action = { type: 'test' };
    // testing initialization, so state should be undefined
    const previousState = undefined;
    // output should be our default state value
    let newState = loginModeReducer(previousState, action);
    expect(newState).toEqual('login');
  })

    test('test register state login', ()=>{
      const action = { type: 'SET_TO_REGISTER_MODE' };
      const previousState = 'login';
      let newState = loginModeReducer(previousState, action);
      expect(newState).toEqual('register');
    })
  })

