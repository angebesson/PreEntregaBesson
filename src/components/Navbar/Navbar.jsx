import {
  Box,
  Flex,
  Avatar,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  useColorModeValue,
  Stack,
  useColorMode,
} from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { CartWidget } from "../CartWidget";
import { FaShopify } from "react-icons/fa6";
import { Link } from "react-router-dom";

import { useItemsCollection } from "../../hooks";



export const NavBar = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  const { items } = useItemsCollection("categories");

  return (
    <>
      <Box bg={useColorModeValue("gray.300", "gray.900")} px={4} w={"100vw"}>
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <Box 
          boxShadow='xl'
          rounded='md' 
          fontSize={"1.5rem"} 
          justifyContent={"space-evenly"}
          size={50} 
          color="#CE2B69">
         
          <Link to="/"><FaShopify />hopLife</Link></Box>
          <Menu>
          <MenuButton as={Link} 
          cursor="pointer"
           > Categories
          </MenuButton>

                <MenuList maxHeight={'200px'} overflowY={'scroll'}>
                  {items.map((category) => (
                    <MenuItem key={category.slug}><Link to={`/category/${category.slug}`} >{category.name}</Link></MenuItem>
                  ))}


                </MenuList>
          </Menu>
          <Flex alignItems={"center"}>
            <Stack direction={"row"} spacing={7}>
              <CartWidget />
              <Button onClick={toggleColorMode}>
                {colorMode === "light" ? <MoonIcon /> : <SunIcon color='yellow.500' />}
              </Button>

              <Menu>
               


                <MenuButton
                  as={Button}
                  rounded={"full"}
                  variant={"link"}
                  cursor={"pointer"}
                  minW={0}
                >
                  <Avatar
                    size={"sm"}
                    src={"https://api.dicebear.com/9.x/thumbs/svg?seed=Jasmine"}
                  />
                </MenuButton>
              </Menu>
            </Stack>
          </Flex>
        </Flex>
      </Box>
    </>
  );
};


