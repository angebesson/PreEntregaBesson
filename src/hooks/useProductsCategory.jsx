import { useState, useEffect } from "react";
import { getProductCategory } from "../services/products";

export const useProductsCategory = (id)=>{
    
    const [productData, setProductData] = useState([]);
   


    useEffect(() => {
        getProductCategory(id)
          .then((res) => {
            if (res.status === 200) {
              setProductData(res.data.products);
            } else {
              console.log("Error");
            }
          })
          .catch((err) => {
            console.log(err);
          })
          
      }, [id]);


      return { productData };


}