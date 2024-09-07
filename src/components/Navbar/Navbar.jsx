import {
  Box,
  Flex,
  Avatar,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useColorModeValue,
  Stack,
  useColorMode,
  Center,
} from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { CartWidget } from "../CartWidget";
import { RiPaintBrushFill } from "react-icons/ri";
import { Link } from "react-router-dom";
import { useCategory } from "../../hooks";
export const NavBar = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const { category } = useCategory();

  return (
    <>
      <Box bg={useColorModeValue("gray.300", "gray.900")} px={4}>
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <Box boxShadow='xl' rounded='md' fontSize={"1.5rem"} display={"flex"} size={70} color="#CE2B69"><Link to="/">P<RiPaintBrushFill />V</Link></Box>
          <Flex alignItems={"center"}>
            <Stack direction={"row"} spacing={7}>
              <CartWidget />
              <Button onClick={toggleColorMode}>
                {colorMode === "light" ? <MoonIcon /> : <SunIcon color='yellow.500' />}
              </Button>

              <Menu>
                <Link to="/">Home</Link>
                <MenuButton as={Link} cursor="pointer">
                  Categorías
                </MenuButton>

                <MenuList maxHeight={'200px'} overflowY={'scroll'}>
                  {category.map((category) => (
                    <MenuItem key={category.slug}><Link to={`/category/${category.slug}`} >{category.name}</Link></MenuItem>
                  ))}


                </MenuList>


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


