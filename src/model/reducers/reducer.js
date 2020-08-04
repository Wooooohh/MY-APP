
const initState = {
        totalValue : 0,
}
export default function (state=initState, action) {
    const totalValue = state.totalValue
    switch (action.type) {
      case "increment":
        return totalValue + 1;
      case "decrement":
        return totalValue - 1;
      default:
        return totalValue ;

    }
};

