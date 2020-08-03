
export function increment  ()  {
    return {
        type: "increment"
    };
  };
  
export function decrement  ()  {
    return {
        type: "decrement"
    };
};

export const init =() =>{
    return {
        type:'init',
    }

}