import { compose, createStore } from "redux";

const initState = {
  isLogin: false,
  user: {
    username: "",
    email: "",
    password: "",
    visaNumber: "",
  },
  PostIsReady: false,
};
const authReducer = (state = initState, action) => {
  if (action.type === "getFormValues") {
    const getFormValues = (username, email, password) => {
      return {
        isLogin: state.isLogin,
        user: {
          username,
          email,
          password,
          visaNumber: state.user.visaNumber,
        },
        PostIsReady: state.PostIsReady,
      };
    };
    return getFormValues(action.username, action.email, action.password);
  }
  if (action.type === "getFromPayment") {
    const getFromPayment = (visaNumber) => {
      return {
        isLogin: state.isLogin,
        user: {
          username: state.user.username,
          email: state.user.email,
          password: state.user.password,
          visaNumber,
        },
        PostIsReady: true,
      };
    };
    return getFromPayment(action.visaNumber);
  }

  if (action.type === "PostWillNotReady") {
    return {
      isLogin: true,
      user: {
        username: state.user.username,
        email: state.user.email,
        password: state.user.password,
        visaNumber: state.user.visaNumber,
      },
      PostIsReady: false,
    };
  }

  return state;
};

const enhancers = compose(
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const store = createStore(authReducer, enhancers);

export default store;
