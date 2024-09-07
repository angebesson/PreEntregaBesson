import { ItemListContainer } from "../components";
import { useParams } from "react-router";
import { useProductsCategory } from "../hooks";


export const Category = () => {
  const { categoryId } = useParams();
  const { productData } = useProductsCategory(categoryId);


  return (
    <ItemListContainer products={productData}/>
  );

};