const initialBar = {
  payload: false,
};

const initialState = {
  product:[],
  
  };
export const sidebar = (state = initialBar, action: any) => {
  switch (action.type) {
    case "sidebar":
      return { ...state, payload: action.payload };
    default:
      return state;
  }
};

export const fetchProducts =(state=initialState, {type,product}:any)=>{
  switch(type){
    case "ALLBLOG": return {...state,product:product }

    default: return state;
  }
}