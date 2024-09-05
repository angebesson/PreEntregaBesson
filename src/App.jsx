
import { ChakraProvider } from "@chakra-ui/react";
import {MainLayout} from "./layout";
import { MainRouter } from "./routes";

 
function App() {
  return (
    <ChakraProvider>
      <MainLayout>
        <MainRouter />
      </MainLayout>
    </ChakraProvider>

  );

}

 

export default App;