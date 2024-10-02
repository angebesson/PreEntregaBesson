import {
  Box,
  Card,
  Stack,
  Heading,
  CardBody,
  Divider,
  CardFooter,
  ButtonGroup,
  Image,
  Text,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

export const ItemListContainer = ({ products }) => {
  
  return (
    <Box display={"flex"} flexWrap={"wrap"}  >
      {products.map((product) => (
        <Card key={product.id} maxW="sm" margin={"1rem"}  >
          <CardBody align="center" justify="center" _hover={{ filter:'grayscale(20%)' }} padding={"10px"}>
          <Link to={`/item/${product.id}`}>
            <Image
              h={"232px"}
              src={product.thumbnail}
              alt={product.name}
              pl={"5vw"}
              borderRadius="lg"
               />
               </Link>
            <Stack  >
              <Heading size="md">{product.title}</Heading>
              <Text  maxHeight={'50px'} overflowY={'scroll'}
              >{product.description}</Text>
              <Text 
              color="#CE2B69" 
              fontSize="1.5em"
              bgGradient="radial(gray.300, pink.200)"
              borderRadius="lg"
              fontWeight="bold"
              >
                {product.price}
              </Text>
            </Stack>
          </CardBody>
          <Divider />
          <CardFooter align="center" justify="center" padding={"5px"}>
            <ButtonGroup spacing="auto">
               <Link to={`/item/${product.id}`}>
                {" "}
                Ir a detalle del producto{" "}
              </Link>
            </ButtonGroup>
          </CardFooter>
        </Card>
      ))}
    </Box>
  );
};