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
   import CartWidget from "../CartWidget/CartWidget";
   import { RiPaintBrushFill } from "react-icons/ri";
  const Navbar = () => {
    const { colorMode, toggleColorMode } = useColorMode();
   
    return (
      <>
        <Box bg={useColorModeValue("gray.300", "gray.900")} px={4}>
          <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
            <Box boxShadow='xl' rounded='md' fontSize={"1.5rem"} display={"flex"} size={70} color="#CE2B69">P<RiPaintBrushFill/>V</Box>
               <Flex alignItems={"center"}>
              <Stack direction={"row"} spacing={7}>
                <CartWidget/>
                <Button onClick={toggleColorMode}>
                  {colorMode === "light" ? <MoonIcon /> : <SunIcon color='yellow.500'/>}
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
                  <MenuList alignItems={"center"}>
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
                  </MenuList>
                </Menu>
              </Stack>
            </Flex>
          </Flex>
        </Box>
      </>
    );
  };
   
  export default Navbar;
   