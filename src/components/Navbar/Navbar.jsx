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

  export const NavBar = () => {
    const { colorMode, toggleColorMode } = useColorMode();
   
    const menuOptions = [
      { id: 1, label: "Smartphones" },
      { id: 2, label: "Belleza" },
      { id: 3, label: "Perfumes" },
      { id: 4, label: "Muebles" },
    ];


    return (
      <>
        <Box bg={useColorModeValue("gray.300", "gray.900")} px={4}>
          <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
            <Box as={Link} to="/" boxShadow='xl' rounded='md' fontSize={"1.5rem"} display={"flex"} size={70} color="#CE2B69">P<RiPaintBrushFill/>V</Box>
               <Flex alignItems={"center"}>
              <Stack direction={"row"} spacing={7}>
                <CartWidget/>
                <Button onClick={toggleColorMode}>
                  {colorMode === "light" ? <MoonIcon /> : <SunIcon color='yellow.500'/>}
                </Button>
   
                <Menu>
                <Link to="/">Home</Link>
              <MenuButton as={Link} cursor="pointer">
                Categorías
              </MenuButton>
              <MenuList>
              {/* <MenuList to="/category/:id" as={Link} cursor="pointer">
                {menuOptions.map((option) => (
                  <MenuItem key={option.id}>{option.label}</MenuItem>
                ))} */}
                    <MenuItem to="/category/smartphones" as={Link} cursor="pointer">Smartphones</MenuItem>
                    <MenuItem to="/category/beauty" as={Link} cursor="pointer">Belleza</MenuItem>
                    <MenuItem to="/category/fragrances" as={Link} cursor="pointer">Perfumes</MenuItem>
                    <MenuItem to="/category/furniture" as={Link} cursor="pointer">Muebles</MenuItem>

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
                  {/* <MenuList alignItems={"center"}>
                    <br />
                    <Center>
                      <Avatar
                        size={"2xl"}
                        src={"https://api.dicebear.com/9.x/thumbs/svg?seed=Sugar"}
                      />
                    </Center>
                    <br />
                    <Center>
                      <p>Username</p>
                    </Center>
                    <br />
                    <MenuDivider />
                    <MenuItem>Your Servers</MenuItem>
                    <MenuItem>Account Settings</MenuItem>
                    <MenuItem>Logout</MenuItem>
                  </MenuList> */}
                </Menu>
              </Stack>
            </Flex>
          </Flex>
        </Box>
      </>
    );
  };
   
  
   