import { ItemListContainer } from "../components";
import { useParams } from "react-router";
import { useProductsCategory } from "../hooks";
import { Flex, Spinner } from "@chakra-ui/react";

export const Category = () => {
  const { id } = useParams();
  const { productData, loading } = useProductsCategory(id);

  return loading ? (
    <Flex
      width={"100%"}
      height={"90vh"}
      alignItems={"center"}
      justifyContent={"center"}
    >
      <Spinner size="xl" />
    </Flex>
  ) : (
    <ItemListContainer products={productData}/>
  );

};