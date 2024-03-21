import axios from "axios";
export const sidebar =(boolean:boolean)=>{
  return {
    type: "sidebar",
    payload:boolean
  }
}

export const fetchProducts = () :any=> {
  return async (dispatch: any) => {
    try {
      const response = await axios.get(`http://localhost:3000/api/allblogs`);
      const result = response.data;
      console.log(result,"result");
      dispatch({
        type: "ALLBLOG",
        product: result.data // Corrected "product" to "products"
      });
    } catch (error:any) {
      console.log(error.message);
    }
  };
};