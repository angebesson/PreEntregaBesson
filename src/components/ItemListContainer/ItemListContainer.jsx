import { Box, useColorModeValue, } from "@chakra-ui/react";
import { FcLikePlaceholder } from "react-icons/fc";
const ItemListContainer = ({ greeting }) => {
  return (
    
    <Box
      width={"100vw"}
      height={"90vh"}
      display={"flex"}
      alignItems={"center"}
      justifyContent={"center"}
      color={"#CE2B69"}
      fontSize={"1.5rem"}
      flexDirection={"column"}   
      bg={useColorModeValue("gray.200", "gray.900")}
    >
      <Box
  w='90%'
  h='20px'
  bgGradient='linear(to-r, gray.300, yellow.400, pink.200)'
  boxShadow='xl' rounded='md'
/>
    
      {greeting}
      <FcLikePlaceholder/>
      <Box
  w='90%'
  h='20px'
  bgGradient='linear(to-r, gray.300, yellow.400, pink.200)'
  boxShadow='xl' rounded='md'
/>
    </Box>
    
  );
};

export default ItemListContainer;