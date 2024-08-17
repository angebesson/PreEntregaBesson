// import React from "react";

// import ReactDOM from "react-dom/client";

// import App from "./App.jsx";


import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import NavBar from "./components/Navbar/Navbar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";

function App() {
  return (
    <ChakraProvider>
      <Navbar />
      <ItemListContainer greeting="Bienvenidos a mi tienda!"/>
    </ChakraProvider>
  );
}

export default App;