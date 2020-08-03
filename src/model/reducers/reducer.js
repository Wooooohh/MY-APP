
const initState = {
    state : {
        totalValue : 0,
        counters: []
    },
}
export default function updateState (state=initState.state, action) {
    const array = state.counters
    const index = array.indexOf(action.counter)
    switch (action.type) {
      case "increment":
        return array[index] + 1;
      case "decrement":
        return array[index] - 1;
      case "addCounter":
        return  array.push(action.counter);
      default:
        return array[index] ;
    }
};

