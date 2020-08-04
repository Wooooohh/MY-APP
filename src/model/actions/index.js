
export function increment  (index)  {
    return {
        index: index,
        type: "increment"
    };
  };
  
export function decrement  (index)  {
    return {
        index: index,
        type: "decrement"
    };
};

export const init =() =>{
    return {
        type:'init',
    }

}