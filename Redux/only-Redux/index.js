const redux = require("redux");

var INITIAL_COUNT = {
  count: 0,
};
const reducer = (store = INITIAL_COUNT, action) => {
  let newStore = store;
  switch (action.type) {
    case "INCREMENT":
      newStore.count = newStore.count + 1;
      break;
    case "DECREMENT":
      newStore.count = newStore.count - 1;
      break;
    case "RESET":
      newStore.count = 0;
      break;
  }
  return newStore;
};

const store = redux.createStore(reducer);

const subscriber = () => {
  var state = store.getState();
  console.log(state);
};
store.subscribe(subscriber);

store.dispatch({ type: "INCREMENT" });
store.dispatch({ type: "INCREMENT" });
store.dispatch({ type: "INCREMENT" });
store.dispatch({ type: "INCREMENT" });
store.dispatch({ type: "INCREMENT" });
store.dispatch({ type: "DECREMENT" });
store.dispatch({ type: "RESET" });
