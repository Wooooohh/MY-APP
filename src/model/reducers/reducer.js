
const initState = {
    state : {
        size: 0,
        totalValue : 0,
        counters: []
    },
}
export default function updateState (state=initState.state, action) {
    const array = state.counters
    console.log(array)
    let index
    switch (action.type) {
      case "increment":
        index = array.indexOf(action.counter)
        return array[index] + 1;
      case "decrement":
        index = array.indexOf(action.counter)
        return array[index] - 1;
      case "addCounter":
        array.push(action.counter);
        return array.size() - 1;
      case "gainCounterValue":
          return array[action.key]
      default:
        return array[index] ;

    }
};

