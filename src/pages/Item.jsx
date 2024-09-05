import { useParams } from "react-router";
import { ItemDetailContainer } from "../components/ItemDetailContainer";
import { useProductsById } from "../hooks";
import { Flex, Spinner } from "@chakra-ui/react";

export const Item = () => {

  const { id } = useParams();
  const { productData, loading } = useProductsById(id);

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
    <ItemDetailContainer product={productData}/>
  );
};