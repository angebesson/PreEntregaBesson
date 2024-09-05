import { Flex, Text } from "@chakra-ui/react";
import { PiShoppingCartDuotone } from "react-icons/pi";

export const CartWidget = () => {
  return (
    <Flex alignItems={"center"} height={"100%"} justifyContent={"space-between"} width={"60px"}>
      <PiShoppingCartDuotone size={30} color="#CE2B69" />
      <Text fontSize={"1.5rem"}>0</Text>
    </Flex>
  );
};
