import { useState, useContext } from "react";
import {
  Box,
  Container,
  Stack,
  Text,
  Image,
  Flex,
  VStack,
  Button,
  Heading,
  SimpleGrid,
  StackDivider,
  useColorModeValue,
} from "@chakra-ui/react";
import { CartContext } from "../../context/CartContext";
export const ItemDetailContainer = ({ product }) => {
  const [showCount, setShowCount] = useState(false);
  const [count, setCount] = useState(0);

  const { addItem, removeItem } = useContext(CartContext);

  const handleShowCount = () => {
    setShowCount(!showCount);
  };

  const handleIncrement = () => {
    if (count < product.stock) {
      const newCount = count + 1;
      setCount(newCount);
      addItem(product, newCount);
    }
  };

  const handleDecrement = () => {
    if (count > 0) {
      const newCount = count - 1;
      setCount(newCount);
      removeItem(product);
    }
  };
  return (
    <Container maxW={"auto"}  mx="auto" >
      <SimpleGrid
        columns={{ sm: 5, md: 3 }}
        spacing={{ base: 5, md:5 }}
            
      >
        <Flex align="center" justify="center" >
          <Image
            rounded={"md"}
            alt={"product image"}
            src={product.thumbnail}
            fit={"cover"}
            align={"center"}
            w={"70%"}
            h={{ base: "90%", sm: "300px", lg: "250px" }}
          />
        </Flex>
        <Stack spacing={{ base: 6, md: 10 }}>
          <Box as={"header"} align="center" justify="center">
            <Heading
              lineHeight={1.1}
              fontWeight={600}
              fontSize={{ base: "2xl", sm: "4xl", lg: "3xl" }}
            >
              {product.title}
            </Heading>
            <Text
             color="#CE2B69" 
             fontSize="1.5em"
             bgGradient="radial(gray.300, pink.200)"
             borderRadius="lg"
             fontWeight="bold"
            >
              ${product.price} USD
            </Text>
          </Box>
          <Stack
            spacing={{ base: 4, sm: 6 }}
            direction={"column"}
            divider={
              <StackDivider
                borderColor={useColorModeValue("gray.200", "gray.600")}
              />
            }
          >
            <VStack spacing={{ base: 4, sm: 6 }} >
              <Text
               align="center" justify="center"
                color={useColorModeValue("gray.500", "gray.400")}
                fontSize={"2xl"}
                fontWeight={"300"}
              >
                {product.description}
              </Text>
            </VStack>
          </Stack>
          <Button
            rounded={'md'}
            w={"auto"}
            mt={3}
            py={"7"}
            bgGradient="radial(gray.300,pink.200)"
            color={useColorModeValue("white", "gray.900")}
            textTransform={"uppercase"}
            _hover={{
              transform: "translateY(2px)",
              boxShadow: "lg",
            }}
            onClick={handleShowCount}
          >
            Agregar al carrito
          </Button>
          {showCount && (
            <Stack direction="row" spacing={4} align="center" mt={4}>
              <Button onClick={handleDecrement} bgGradient="radial(gray.300,pink.200)">-</Button>
              <Text fontSize="lg">{count}</Text>
              <Button onClick={handleIncrement} bgGradient="radial(gray.300,pink.200)">+</Button>
            </Stack>
          )}
        </Stack>
      </SimpleGrid>
    </Container>
  );
};