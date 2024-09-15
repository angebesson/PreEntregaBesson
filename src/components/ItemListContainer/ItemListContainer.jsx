import {
  Box,
  Card,
  Stack,
  Heading,
  CardBody,
  Divider,
  CardFooter,
  ButtonGroup,
  Button,
  Image,
  Text,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";


export const ItemListContainer = ({ products }) => {
  return (
    <Box display={"flex"} flexWrap={"wrap"} justifyContent={"center"}>
      {products.map((product) => (
        <Card key={product.id} maxW="md" margin={"1rem"} alignContent={"center"} variant={"filled"}>
          <CardBody align="center" justify="center" height="100vh" >
            <Image
              src={product.thumbnail}
              alt={product.name}
              borderRadius="lg"
              boxSize='200px'             
            />
            <Stack mt="4" spacing="2">
              <Heading textAlign={"center"} size="md">{product.title}</Heading>
              <Text>{product.description}</Text>
              <Text textAlign={"center"} color="#CE2B69" fontSize="2xl">
                {product.price}
              </Text>
            </Stack>
          </CardBody>
          <Divider />
          <CardFooter>
            <ButtonGroup spacing="2">
              <Link to={`/item/${product.id}`}>Ir a Detalle</Link>
            </ButtonGroup>
          </CardFooter>
        </Card>
      ))}
    </Box>
  );
};
