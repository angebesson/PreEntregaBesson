import { useState } from "react";
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


export const ItemDetailContainer = ({ product }) => {
  const [showCount, setShowCount] = useState(false);
  const [count, setCount] = useState(0);
 
  const handleShowCount = () => {
    setShowCount(!showCount);
  };
 
  const handleIncrement = () => {
    setCount(count + 1);
  };
 
  const handleDecrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };
 
  return (
    <Container maxW={"7xl"} centerContent>
      <SimpleGrid
        columns={{ base: 1, lg: 2 }}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 18, md: 24 }}
      >
        <Flex align="center" justify="center" height="100vh">
          <Image
            rounded={"md"}
            alt={"product image"}
            src={product.thumbnail}
            fit={"cover"}
            align={"center"}
            w={"80%"}
            h={{ base: "80%", sm: "200px", lg: "400px" }}
          />
        </Flex>
        <Stack spacing={{ base: 3, md: 5 }}>
          <Box as={"header"}>
            <Heading
              lineHeight={1.1}
              fontWeight={500}
              fontSize={{ base: "xl", sm: "3xl", lg: "4xl" }}
            >
              {product.title}
            </Heading>
            <Text
              color={useColorModeValue("gray.900", "gray.500")}
              fontWeight={300}
              fontSize={"2xl"}
              textAlign={"center"}
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
            <VStack spacing={{ base: 4, sm: 6 }}>
              <Text
                color={useColorModeValue("gray.500", "gray.400")}
                fontSize={"2xl"}
                fontWeight={"300"}
              >
                {product.description}
              </Text>
            </VStack>
          </Stack>
 
          <Button
            
            w={"full"}
            mt={8}
            size={"lg"}
            borderRadius='15px'
            py={"7"}
            bg={useColorModeValue("gray.900", "gray.50")}
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
              <Button onClick={handleDecrement}>-</Button>
              <Text fontSize="lg">{count}</Text>
              <Button onClick={handleIncrement}>+</Button>
            </Stack>
          )}
        </Stack>
      </SimpleGrid>
    </Container>
  );
};
 