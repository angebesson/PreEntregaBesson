
import { ChakraProvider } from "@chakra-ui/react";
import {MainLayout} from "./layout";
import { MainRouter } from "./routes";
import { CartProvider } from "./context";

 
function App() {
  return (
    <ChakraProvider>
      <CartProvider>
      <MainLayout>
        <MainRouter />
      </MainLayout>
      </CartProvider>
    </ChakraProvider>

  );

}

 

export default App;