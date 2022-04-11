import {
  login,
  loginRequest,
  logout,
  displayNotificationDrawer,
  hideNotificationDrawer
} from './uiActionCreators';


describe('login', () => {
  it(`Tests that login's dispatch is called with the right type and user`, () => {
    const dispatch = jest.fn();
    const email = 'email';
    const password = 'password';

    login(email, password)(dispatch);

    expect(dispatch).toHaveBeenCalledWith({
      type: 'LOGIN',
      user: {
        email,
        password
      }
    });
  })
})

describe('logout', () => {
  it(`Tests that logout's dispatch is called with the right type`, () => {
    const dispatch = jest.fn();

    logout()(dispatch);

    expect(dispatch).toHaveBeenCalledWith({
      type: 'LOGOUT'
    });
  })
})

describe('displayNotificationDrawer', () => {
  it(`Tests that displayNotificationDrawer's dispatch is called with the right type`, () => {
    const dispatch = jest.fn();

    displayNotificationDrawer()(dispatch);

    expect(dispatch).toHaveBeenCalledWith({
      type: 'DISPLAY_NOTIFICATION_DRAWER'
    });
  })
})

describe('hideNotificationDrawer', () => {
  it(`Tests that hideNotificationDrawer's dispatch is called with the right type`, () => {
    const dispatch = jest.fn();

    hideNotificationDrawer()(dispatch);

    expect(dispatch).toHaveBeenCalledWith({
      type: 'HIDE_NOTIFICATION_DRAWER'
    });
  })
})

// describe('loginRequest', () => {
//   it(`Tests that loginRequest's dispatch is called with the right type when API 
//   responds with data`, () => {
//     // this test will only work if the server is running
//     const dispatch = jest.fn();
//     const email = 'email';
//     const password = 'password';

//     loginRequest(email, password)(dispatch);

//     expect(dispatch).toHaveBeenCalledWith({
//       type: 'LOGIN'
//     });

//     expect(dispatch).toHaveBeenCalledWith({
//       type: 'LOGIN_SUCCESS',
//       user: {
//         email,
//         password
//       }
//     });
//   })

//   it(`Tests that loginRequest's dispatch returns the right response when API
//   responds with data`, () => {
//     // this test will only work if the server is running
//     const dispatch = jest.fn();
//     const email = 'email';
//     const password = 'password';

//     const response = loginRequest(email, password)(dispatch);

//     expect(response).toEqual({
//       type: 'LOGIN_SUCCESS',
//       user: {
//         email,
//         password
//       }
//     });
//   })

//   it(`Tests that loginRequest's dispatch is called with the right type when API
//   responds with error message`, () => {
//     // this test will only work if the server is running
//     const dispatch = jest.fn();
//     const email = 'email';
//     const password = 'password';

//     loginRequest(email, password)(dispatch);

//     expect(dispatch).toHaveBeenCalledWith({
//       type: 'LOGIN'
//     });

//     expect(dispatch).toHaveBeenCalledWith({
//       type: 'LOGIN_FAILURE',
//     });
//   })

//   it(`Tests that loginRequest's dispatch returns the right response when API
//   responds with error message`, () => {
//     // this test will only work if the server is running
//     const dispatch = jest.fn();
//     const email = 'email';
//     const password = 'password';

//     const response = loginRequest(email, password)(dispatch);

//     expect(response).toEqual(fetchMock.mock('http://localhost:8564/login-success.json', {
//       email,
//       password
//     }));

//     expect(dispatch).toHaveBeenCalledWith({
//       type: 'LOGIN'
//     });

//     expect(dispatch).toHaveBeenCalledWith({
//       type: 'LOGIN_FAILURE',
//     });
//   })
// })